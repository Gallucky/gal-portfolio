// scripts/refreshTags.js

import { execSync } from "node:child_process";
import { existsSync, rmSync } from "node:fs";
import readline from "node:readline/promises";
import { stdin, stdout } from "node:process";

const rl = readline.createInterface({
    input: stdin,
    output: stdout,
});

async function confirm(question) {
    const answer = (await rl.question(`${question} (y/N): `)).trim().toLowerCase();

    return answer === "y" || answer === "yes";
}

async function runGit(command) {
    console.log(`> ${command}`);

    execSync(command, {
        stdio: "inherit",
    });
}

async function main() {
    const proceed = await confirm(
        "This will DELETE ALL LOCAL Git tags and fetch them again from origin.\nContinue?",
    );

    if (!proceed) {
        console.log("Cancelled.");
        rl.close();
        return;
    }

    const tags = execSync("git tag", {
        encoding: "utf8",
    })
        .split(/\r?\n/)
        .map((t) => t.trim())
        .filter(Boolean);

    if (tags.length === 0) {
        console.log("No local tags found.");
    } else {
        console.log(`Deleting ${tags.length} local tag(s)...`);

        for (const tag of tags) {
            console.log(`- ${tag}`);
            await runGit(`git tag -d "${tag}"`);
        }
    }

    console.log("\nFetching tags from origin...");
    await runGit("git fetch origin --prune --tags");

    console.log("\nDone!");
    rl.close();
}

main().catch((err) => {
    rl.close();
    console.error(err);
    process.exit(1);
});
