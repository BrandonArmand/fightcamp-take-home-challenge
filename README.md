# FightCamp's Take Home Challenge 🥊

## 1. Screen Scaling Issue [easy]
To fix the alignment of the data within the packages, I:

1. changed the flex-box on the pricing to be center aligned along with a small margin on the total to avoid a merge with the "or" text when shrunk.
2. Added a `min-width` on the `packages-block` class to fix an issue with the center block shrinking more than the other two blocks.
3. Added set heights on both`.packages-block-header, .packages-block-info` classes to stop the blocks from individually growing inconsistantly. The heights that they are both set to represent a worst-case pixel amount for both classes' heights.

Side note: I also went with this design for solving the sizing on shrinkage, but ultimatly decided not to commit to the idea as to avoid changing too much of the page.
<img width="908" alt="Screen Shot 2020-02-24 at 8 29 52 PM" src="https://user-images.githubusercontent.com/27185256/75228087-4d183680-5764-11ea-92d9-6b173ad5155c.png">

## 2. Mobile Package Centering [easy]
When the page is shrunk to a mobile size, the blocks do not get centered.

To fix this, I added `align-items: center;` to the block container.

## 3. Included Items [easy]
The `itemIncluded` function did not work properly. There were 2 issues with it.

1. `typeof item === "boolean"` is not correct. The data set is of type object (Array), so I changed the first bit to `typeof item === "object"`.
2. `(item.included === "false")`, "false" is a string which will eq(true), thus true === false, which I changed to `(item.included === false)`.

## 4. Refactor [normal]
The packages.vue file is already pretty cleaned up with one outlier, the dataset.

So what I did is moved the data from `packages.vue` to `src/data/packageData.js` which I then referenced with 
```
import packages from '../data/packageData'
...
data() {
  return {
    ...packages
  }
}
```
## 5. BONUS [hard]
This was a tough one. The initial response was to check the lazyLoad package since the `<lazy-component>` wraps the `<ImagePresenter>` component, as well as the issue being connected to page events.

So after some initial research, I came up with zero help. So my next step was to play around with the options used in the `VueLazyLoad` package.

Setting observer to true allowed for the component to work after scroll; however, it then ONLY worked after scroll. Not on the initial load.
```
Vue.use(VueLazyload, {
  preLoad: 2,
  lazyComponent: true,
  observer: true,
});
```
So I did some debugging on the the components `create`, and `click` methods, and interestinlgly they both seem to "work" even though no data visually updates. 

This leads me to assume a few things.
1. The data isn't actually changing.
2. The data is constantly initiating causing the first thumbnail in the array to be infinitely selected.

But since setting `observer: true` sorta fixed #2, I would assume that it isn't the case.

### Attempt 2
I decided to come back for a second attempt and fixed it in 5 minutes.

I went through the souce code for the vue-lazyload package, and found the `<lazy-container>` component, and decided to replace the `<lazy-component>` component with it.

I spent maybe an hour on the BONUS section alone, gave up, and decided the next day to give it another shot and got it completed immediatly. Sometimes the solution is just a good nights sleep.