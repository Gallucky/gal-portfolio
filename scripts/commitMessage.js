import { exec } from "child_process";
import { promisify } from "util";
import fs from "fs";
import path from "path";

const execAsync = promisify(exec);

async function createCommitPrompt() {
    try {
        console.log("1/3 - git diff");
        const { stdout: diffOutput } = await execAsync("git diff");

        console.log("2/3 - git status");
        const { stdout: statusOutput } = await execAsync("git status");

        const question = `What should the commit message be?\nCan you also format your answer/response as a copyable text like a code block of .txt/text?`;

        const finalOutput = `${diffOutput}\n${statusOutput}\n${question}`;

        // Write to temp file
        const tmpFile = path.join(process.cwd(), "commitPrompt.txt");
        fs.writeFileSync(tmpFile, finalOutput, "utf8");

        console.log("3/3 - copying to clipboard");
        await execAsync(`type "${tmpFile}" | clip`);

        console.log("Prompt output copied to clipboard!");
        console.log("Final Output:\n", finalOutput);

        // Optional: delete temp file
        fs.unlinkSync(tmpFile);
    } catch (error) {
        console.error("Error:", error);
    }
}

createCommitPrompt();
