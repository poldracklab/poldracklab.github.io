# Statistical methods

## Need help?

- Do not hesitate to ask
    Jeanette Mumford for help with any statistical analyses.
    
## Multiple testing

- Methods for multiple testing
    correction should be chosen prior to data analysis and reported in
    the preregistration document.
- The nature of grouping for
    multiple testing corrections (e.g., parameter within single models,
    sets ot models, etc) should be pre-specified.
- For fMRI data, if using
    cluster-based thresholding the cluster forming threshold must be Z ≥
    3.1 if using parametric thresholding.  There are no restrictions on
    threshold when using nonparametric thresholding, but the threshold
    should be pre-specified.


## Cross-validation

- Proper cross-validation practices
should be considered. Refer to [https://pubmed.ncbi.nlm.nih.gov/31774490/](https://pubmed.ncbi.nlm.nih.gov/31774490/) for more detail.
    - In-sample model fit indices should not be reported as evidence for predictive accuracy
    - The cross-validation procedure should encompass all operations applied to the data
    - Prediction analyses should not be performed with samples smaller than several hundred observations
    - Multiple measures of prediction accuracy should be examined and reported
    - The coefficient of determination should be computed using the sums of squares formulation and not the squared correlation coefficient
    - Leave-one-out cross-validation should be avoided in favor of shuffle-split or K-fold cross-validation.

## Mixed-effects models

- Mixed effects models should
    include all possible random effects, subject to the constraint of
    adequate model convergence.
- Convergence should be checked
    for all models, and models should be checked for highly influential
    observations.
- Simplification or random effects structure can be done if the p-value > 0.2 (https://www.google.com/url?q=https://www.sciencedirect.com/science/article/pii/S0749596X17300013&sa=D&source=editors&ust=1623857125982000&usg=AOvVaw2E_twuab7e56Nn_i1yTdmn) assuming convergence.

## Model suitability and diagnostics

- Does the model properly test
    the hypothesis of interest?
- Do the data conform to the
    assumptions of the model?  
- All model fits should be
    criticized to identify violation of any assumptions or presence of
    outliers.

##  Reporting results

- Effect size, parameter
    estimate, standard error, p-value and confidence interval should all
    be reported.
- In cases where null effects
    are reported, some measure of evidence for the null hypothesis (e.g.
    Bayes factors, equivalence tests) should be reported.
- Results for all analyses that
    were preregistered should be reported.
