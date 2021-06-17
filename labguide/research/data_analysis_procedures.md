# Data analysis procedures

## Exploratory vs. confirmatory analyses

- We affirm the scientific
    utility and importance of both exploratory and hypothesis-driven
    (confirmatory) research, but it is essential that they be clearly
    distinguished.
- All research will be
    considered exploratory unless the hypotheses and analysis methods
    were pre-registered.

## Data quality control

- For datasets where it is
    feasible, the data should be visually examined for outliers or
    aberrant patterns (e.g. zero-inflation) using pair plots or other
    appropriate methods.
- Analysis procedures should be
    tested on the first subject (for fMRI) or first few subjects (for
    behavioral studies) before collecting any additional data, to ensure
    that the data are appropriately recorded.
- For MRI data being acquired
    by the lab, research coordinators should run MRIQC and view the
    reports within one week of acquisition.  

## Code validation

- When possible, all analysis code
should be tested on simulated data to ensure positive and negative
control *prior to any analysis of the real data*.

- Positive controls should ensure
that effects of interest are detected when present
   - These can also be extended to
    perform power analysis.

- Negative controls should ensure
that no effects are detected when the null is true

- In some cases, it is necessary to
understand the nature of the data (e.g. distributions of variables) in
order to develop appropriate analysis and simulation code. In these
cases, the researcher will ask Dr. Poldrack or another lab member to
generate a simulated dataset based on their actual data (e.g. by
randomly shuffling the observations of each variable to create a
knockoff dataset that maintains each variable’s marginal distribution),
prior to any analyses.

  

## Multiple analysts

- When possible, all data
    analyses should be replicated by an independent analyst who is blind
    to the results of the initial analysis.
- If discordant results are
    observed, then the analysts will work together to determine their
    source, and whether they reflect error versus true analytic
    variability.

##  Reproducible analysis

- All analysis procedures should be
implemented in code and runnable with a single command.

- We aim to avoid any analyses that
involve manual intervention. If such analyses are necessary (e.g. for identifying anatomical
brain regions), the specific protocol should be described, and if
possible the manual operation should be recorded using screen capture.

- The entire software environment
should be at best reproducible, or at minimum recordable.
   - The best practice is to
    implement all analyses within a Docker image that can be shared with
    the code.
   - If possible, the versions of
    all software libraries should be pinned.
   - At minimum, the entire
    software environment (including library versions) should be recorded
    and included with the shared results.
