# Code management and sharing

## Code management

- All code should be managed using
a version control system, preferably git.
    - There are many resources online for learning git.  A good starting point is [Git for beginners: The definitive practical guide](https://stackoverflow.com/questions/315911/git-for-beginners-the-definitive-practical-guide).
    - Git questions can be addressed to the #git channel on the Poldracklab Slack.

- Code should be regularly pushed
to a remote server, preferably Github.
    - Our default is that all repositories for research projects will be public, unless there is a strong reason to keep it private.

- Any substantive code copied or
adapted from another source (e.g. stackoverflow) should be attributed to
the source (including the URL of the source). 
    - References to the copied or adapted sources should be added to the script files where they are written (preferably on the line before the source). 
    - Create a `notices.md` [following this template](https://github.com/github/opensource.guide/blob/main/notices.md) to reference larger portions of code that were copied or adapted to your project.

-  Care must be taken to avoid
sharing identifiable data, private passwords, AWS credentials, and other confidential
information when using Github. 
    - Any private information should be stored in a separate text file that is read in by the code, and those files should be added to the `.gitignore` file so that they will not be checked in.
    - Any accidental breach should be dealt
with and reported to Dr. Poldrack and other relevant parties immediately.

## Code review

- All coding projects should undergo a review before paper submission. 
- When writing code, keep in mind that it will be shared with others. This mindset improves readability and encourages careful development practices.
- At the very least, your code should:
    - Be version-controlled and have a straightforward installation process for dependencies.
    - Include files that allow for testing.
    - Be well-documented (e.g., comments in code) and clearly written.
    - Contain a README.md file that explains the structure of your codebase.
- Code review is an ongoing process rather than a final step, so there is no expectation for your code to be "perfect" at any stage.
- Here are some useful resources on code review: (Awesome Code Review)[https://github.com/joho/awesome-code-review], (Blog post)[https://www.djmannion.net/code_review/]. 

## Code sharing

- All code should be made available
via Github, upon submission of the preprint at the latest.
- All shared code should be accompanied by
an open source license.
   - Our general preference is for
    permissive licenses such as MIT or Apache, but other licenses may be
    used (e.g. in collaborative projects that use GPL-style licenses).
    - If code is used from other projects, the licensing requirements for that code should be obeyed.
- A Github release should be generated for code related to any paper submission, containing the exact code used to implement all of the
included analyses for the submitted version.   
- The Github repository should be
linked to Zenodo in order to generate a DOI for each release, and this DOI should be included in the manuscript (rather than the Github link).
