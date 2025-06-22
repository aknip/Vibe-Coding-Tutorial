# Trivia Game

Create a simple game with a detailed spec and a prompt plan.

Using Model "SWE-1" this will take approx. 


## Configuration of Cascade

- Delete all files from this folder except the README.md
- Chose Model "SWE-1"
- Enable "Write" Mode
- Disable "Plan" Mode

## Prompts

### Prompt 1 (chat mode)
Ask me one question at a time so we can develop a thorough, step-by-step spec for this idea. Each question should build on my previous answers, and our end goal is to have a detailed specification I can hand off to a developer. Let’s do this iteratively and dig into every relevant detail. Remember, only one question at a time.

Here’s the idea:
Create a react application with vite that represents a fun trivia game, you should take the trivia questions from a local json file and save the high scores of people that play that game.


### Prompt 2 (chat mode)
Now that we’ve wrapped up the brainstorming process, can you compile our findings into a comprehensive, developer-ready specification? Include all relevant requirements, architecture choices, data handling details, error handling strategies, and a testing plan so a developer can immediately begin implementation. 
Save the spec in a file called "spec.md".


### Prompt 3 (chat mode)
Based on the file file "spec.md": Draft a detailed, step-by-step blueprint for building this project. Then, once you have a solid plan, break it down into small, iterative chunks that build on each other. Look at these chunks and then go another round to break it into small steps. Review the results and make sure that the steps are small enough to be implemented safely with strong testing, but big enough to move the project forward. Iterate until you feel that the steps are right sized for this project.

From here you should have the foundation to provide a series of prompts for a code-generation LLM that will implement each step in a test-driven manner. Prioritize best practices, incremental progress, and early testing, ensuring no big jumps in complexity at any stage. Make sure that each prompt builds on the previous prompts, and ends with wiring things together. There should be no hanging or orphaned code that isn't integrated into a previous step.

Make sure and separate each prompt section. Use markdown. Each prompt should be tagged as text using code tags. The goal is to output prompts, but context, etc is important as well.

Save the spec in a file called "prompt_plan.md".


### Prompt 4 (chat mode)
1. Open file "prompt_plan.md" and identify any prompts not marked as completed.
2. For each incomplete prompt:
    - Double-check if it's truly unfinished (if uncertain, ask for clarification).
    - If you confirm it's already done, skip it.
    - Otherwise, implement it as described.
    - Make sure the tests pass, and the program builds/runs
    - Commit the changes to the github repository with a clear commit message.
    - Update file "prompt_plan.md" to mark this prompt as completed. Put the mark "✅ COMPLETED" at the end of the corresponding prompt headline.
3. After you finish each prompt, pause and wait for user review or feedback.
4. Repeat with the next unfinished prompt as directed by the user.
IMPORTANT: Follow these steps Follow each of these instructions in detail!


## Speeding up

To speed up enable "Auto Execution": 
- Menu "Windsurf" > "Preferences" > "Windsurf Preferences" > 
- Go to"Configuration / Auto Execution" and chose "Auto" or "Turbo"
- Use these options carefully at your own risk!

