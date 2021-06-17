# Data management and sharing

## Data Management

- All research-related materials
(including data and code) should be stored on a volume that is
automatically backed up to a cloud storage server, such as Google Drive
(which provides [free storage via your Stanford login](https://uit.stanford.edu/service/gsuite/drive)).
   - Stanford also provides access
    to [Crashplan](https://uit.stanford.edu/service/code42crashplan)
    backups for faculty and staff which automatically backs up laptops
    and computers.   
- Neuroimaging datasets should be
backed up on TACC Corral.   
- Every dataset should be organized
with the goal that another researcher could take the dataset and
immediately understand its content without the need to ask questions of
the dataset owner.
- All imaging data should be
organized using the [BIDS format](https://bids-specification.readthedocs.io/en/stable/).
- For non-imaging data, files and
folders should be named and organized using the [Psych-DS
format](https://docs.google.com/document/d/1u8o5jnWk0Iqp_J06PTu5NjBfVsdoPbBhstht6W0fFp0/edit#heading=h.1m6sa5bs9j0e)
when possible.
- Variable names should be as
expressive as possible, with automated parsing in mind. The structure of variable names
should follow the key-value schema used in BIDS (with key and value
separated by a dash, and key-value pairs separated by underscores). All embedded numbers should be
zero-padded. 
    - Examples:
    - for item 5 on the Barratt
    Impulsiveness Scale, the variable name might be
    “survey-BIS_item-005”
- All datasets should be
accompanied by a data dictionary that specifies the meaning of each
variable.  
   - This should preferably be
    stored as a JSON file, with variable names as dictionary keys to
    support automated parsing.

## Data sharing

- All data generated within our lab
will be shared upon publication at the latest, and preferably upon
preprint submission.
- In some cases, we may work with
datasets that we are not able to share in full, due to data use
agreements or legal restrictions. In this case, we will push to share at
least the processed data necessary to run the primary statistical
analyses.
- Data will be shared through
platforms that allow snapshotting and generation of a DOI:
   - OpenNeuro for neuroimaging
    data
   - For behavioral data,
    repositories include Zenodo (preferred), OSF, Stanford Digital
    Repository, or Dryad.
   - Large data files should not
    be committed to Github repositories. Small data files may be hosted
    on github, but it should not be the primary sharing platform.   
- A snapshot should be shared that
matches exactly the analyses in the publication, and which can be
analyzed directly using the shared analysis code.
- All data will be shared with an
explicit data use agreement (aka “license”)
   - We prefer the minimally
    restrictive license possible, preferably CC0
- All data should be shared with an
explicit description of how they should be cited.
- When using shared data, lab
members should ensure that they properly cite the data source in any
publications using the language recommended by the data owner.
