# Important: CryptoSwap workflow guideline
# interface strictness level: 8/10

1. Push your code to a new branch with format github_username/feature (git push origin main:github_username/feature)
2. For changes that involve changing dependencies, adding new functions etc, please make feature branch.
3. Once you're ready, push make a pull request to the dev-test branch if the change you are making might be breaking. An
example of a breaking change is changing a component that is not only limited to a single page or making routing changes. 
If it is not breaking, feel free to just PR to the dev branch or not depending on how minor. 
5. After it gets approved, it will be pushed to the dev branch
6. Never push code to main branch, as it is set to automatically _almost_ update the website. 

