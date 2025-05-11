# Contributing to Better Auth Demo

If you're reading this, you're awesome! Thank you for being a part of the community and helping us make these projects great. Here are a few guidelines that will help you along the way.

## Code of conduct

We have adopted the [Contributor Covenant](https://www.contributor-covenant.org/) as our code of conduct, and we expect project participants to adhere to it.
Please read [the full text](/CODE_OF_CONDUCT.md) to understand what actions will and will not be tolerated.

## Your first pull request

Working on your first pull request? You can learn how in this free video series: [How to Contribute to an Open Source Project on GitHub](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github).

Get started with [good first issues](https://github.com/vicasas/better-auth-demo/issues?q=is:open+is:issue+label:"good+first+issue"), which have a limited scope and a working solution that's already been discussed.
This makes them ideal for newer developers, or those who are new to these libraries and want to see how the contribution process works.

We also have a list of [ready to take issues](https://github.com/vicasas/better-auth-demo/issues?q=is:open+is:issue+label:"ready+to+take"), which are issues that have already been at least partially resolved in discussion, to the point that it's clear what to do next.
These issues are great for developers who want to reduce their chances of falling down a rabbit hole in search of a solution.

Of course, you can work on any other issue you like—the "good first" and "ready to take" issues are simply those where the scope and timeline may be better defined. Pull requests for other issues, or completely novel problems, may take a bit longer to review if they don't fit into our current development cycle.

If you decide to fix an issue, please make sure to check the comment thread in case somebody is already working on a fix. If nobody is working on it at the moment, please leave a comment stating that you've started to work on it, so other people don't accidentally duplicate your effort.

If somebody claims an issue but doesn't follow up after more than a week, it's fine to take over, but you should still leave a comment. If there has been no activity on the issue for 7 to 14 days, then it's safe to assume that nobody is working on it.

## Sending a pull request

Better Auth Demo project are community-driven, so pull requests are always welcome, but before working on a large change, it's best to open an issue first to discuss it with the maintainers.

When in doubt, keep your pull requests small.
For the best chances of being accepted, don't bundle more than one feature or bug fix per PR.
It's often best to create two smaller PRs rather than one big one.

1. Fork the repository.

2. Clone the fork to your local machine and add the upstream remote:

```bash
git clone https://github.com/<your username>/better-auth-demo.git
cd better-auth-demo
git remote add upstream https://github.com/vicasas/better-auth-demo.git
```

3. Synchronize your local `main` branch with the upstream one:

```bash
git checkout main
git pull upstream main
```

4. Install the dependencies with npm:

```bash
npm install
```

5. Create a new topic branch:

```bash
git checkout -b my-topic-branch
```

6. Make changes, commit, and push to your fork:

```bash
git push -u origin HEAD
```

7. Go to [the repository](https://github.com/vicasas/better-auth-demo) and open a pull request.

The team actively monitors for new pull requests.
We will review your PR and either merge it, request changes to it, or close it with an explanation.

## Trying changes

The project is set up using [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
This is the best place to experiment with your changes—it's the local development environment used by the maintainers.

To get started, run:

```bash
npm run dev
```

You can now access the site locally: http://localhost:3000.

## Coding style

Please follow the coding style of the project. Better Auth Demo use Prettier and ESLint, so if possible, enable linting in your editor to get real-time feedback.

- `npm run lint`: Checks for coding style issues.
- `npm run format`: Checks the code format.

## License

By contributing your code to the [Better Auth Demo](https://github.com/vicasas/better-auth-demo) GitHub repository, you agree to license your contribution under the [MIT license](/LICENSE).
