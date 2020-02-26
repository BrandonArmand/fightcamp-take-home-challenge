<template>
  <div class="packages">
    <div class="packages-title">
      <h1 class="packages-title-text">
        Shop Our Packages
      </h1>
    </div>
    <div class="packages-container">
      <div
        v-for="pkg in packages"
        :key="pkg.id"
        class="packages-block">
        <div class="packages-block-title">
          <h2 class="packages-block-header">
            {{ pkg.title }}
          </h2>
          <div v-if="pkg.headline">
            <p class="packages-block-popular-pill">
              {{ pkg.headline }}
            </p>
          </div>
        </div>
        <div class="packages-block-info">
          <div>
            <p>{{ pkg.text }}</p>
          </div>
        </div>
        <lazy-container class="packages-block-card-img">
          <ImagePresenter
            :id="pkg.id"
            :content="pkg"
            class="packages-block-presenter" />
        </lazy-container>
        <div class="packages-block-items">
          <div class="packages-block-items-container">
            <div
              v-for="(item, index) in pkg.included"
              :key="index"
              class="packages-block-item-inner">
              <div v-if="item.name" class="packages-block-item-block">
                <p class="packages-block-item-text" :class="{ 'packages-block-item-not-included': itemIncluded(item) }">
                  &nbsp;{{ item.name }} &nbsp;
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="packages-block-pricing-container">
          <div class="packages-block-price-col">
            <span class="packages-block-price-heading">One-Time Payment</span>
            <div class="packages-block-price-block-value">
              <span class="prefix">$</span>
              <span class="value">{{ pkg.product.price / 100 }}</span>
            </div>
          </div>
          <div class="packages-block-finance-col">
            <div class="packages-block-price-heading-block">
              <span class="packages-block-price-heading">As Low As</span>
              <span class="packages-block-price-heading-info">ⓘ</span>
            </div>
            <div class="packages-block-price-block-value">
              <span class="prefix">$</span>
              <span class="value">{{ parseFloat(pkg.product.monthly / 100).toFixed(0) }}</span>
              <span class="suffix">/mo</span>
            </div>
            <span class="packages-block-price-block-text">For {{ pkg.product.months }} Months</span>
          </div>
        </div>
        <div class="center">
          FightCamp Membership Separate†
        </div>
        <div class="packages-block-button-container">
          <a href="#" class="packages-block-button">
            Shop Package
          </a>
        </div>
        <div class="center">
          Free Shipping & 30-Day Money Back Guarantee
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ImagePresenter from '@/components/ImagePresenter.vue';
  import packages from '../data/packageData'

  export default {
    name: 'Packages',
    data() {
      return {
        ...packages
      }
    },
    computed: {
        packages() { return [this.fightCampPersonal, this.fightCampConnect, this.fightCampTribe] },
    },
    methods: {
      itemIncluded(item) {
        return (typeof item === "object") && (item.included === false)
      },
    },
    components: {
      ImagePresenter,
    },
  };
</script>

<style scoped lang="scss">
  .packages {
    background-color: #dddfe1;
    justify-content: center;
    padding: 1.5rem 0 5rem 0;

    &-sub-title {
      margin: 0;
      color: #4f555c;
    }

    &-title {
      align-items: center;
      color: #0f1e3c;
      flex-direction: column;
      display: flex;
    }

    &-title-text {
      font-size: 40px;
      margin: 1rem 0;

      @media (min-width: 768px) and (max-width: 1200px) {
        font-size: 60px;
      }

      @media (min-width: 1200px) {
        font-size: 60px;
      }
    }

    &-container {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;

      @media  (min-width: 768px) and (max-width: 1200px) {
        flex-direction: row;
        padding: 1rem 0;
        justify-content: center;
      }

      @media  (min-width: 1200px) {
        flex-direction: row;
        padding: 1% 3%;
        justify-content: center;
      }
    }
  }

  .packages-block {
    background-color: #ffffff;
    margin: 1rem;
    border-radius: 8px;
    border: none;
    padding: 16px 16px 32px 16px;
    display: flex;
    flex-direction: column;
    max-width: 450px;
    min-width: 150px;

    @media  (min-width: 768px) and (max-width: 1200px) {
      flex: 1;
    }

    @media  (min-width: 1200px) {
      flex: 1;
    }

    &-info {
      height: 75px;
    }

    &-title {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
    }

    &-header {
      margin: .5rem 0 !important;
      color: #d73c4b;
      height: 35px;
    }

    &-popular-pill {
      background-color: #27344f;
      border: 1px solid #27344f;
      color: #ffffff;
      padding: 3px 7px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      margin: 6px;
      border-radius: 16px;
      font-size: .75rem;
    }

    &-pricing-container {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-content: center;
      margin-bottom: 2rem;
    }

    &-price-col {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-content: center;
      align-items: center;
      border-right: solid 1px #dddfe1;
      padding: .5rem 0 0 0;
    }

    &-price-col::after {
      position: relative;
      display: inline-block;
      content: "OR";
      height: 1rem;
      width: 1rem;
      background-color: #ffffff;
      top: -20%;
      right: -50%;
      font-size: 0.75rem;
      border-radius: 50%;
    }

    &-finance-col {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-content: center;
      align-items: center;
      padding: .5rem 0 0 0;
    }

    &-price-text {
      color: #4f555c;
    }

    &-price {
      font-size: 1.25rem;
      margin: .5rem 0 0 0;
    }

    &-price-heading-block {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
    }

    &-price-heading {
      //height: 22px;
      font-size: 14px;
      text-align: center;

      @media (min-width: 768px) and (max-width: 1200px) {
        font-size: 16px;
      }

      @media (min-width: 1200px) {
        font-size: 16px;
      }
    }

    &-price-heading-info {
      margin-left: .5rem;
      font-size: .75rem;
    }

    &-price-block-text {
      margin: 10px 0;
      font-size: 14px;
    }

    &-price-block-value {
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin-top: .5rem;
      margin-right: 5px;

      .prefix {
        align-self: flex-start;
        font-size: 20px;

        @media  (min-width: 768px) and (max-width: 1200px) {
          font-size: 20px;
        }

        @media  (min-width: 1200px) {
          font-size: 20px;
        }
      }

      .value {
        font-size: 30px;

        @media  (min-width: 768px) and (max-width: 1200px) {
          font-size: 35px;
        }

        @media  (min-width: 1200px) {
          font-size: 35px;
        }
      }

      .suffix {
        align-self: flex-end;
        line-height: 1.5em;
        font-size: 20px;

        @media  (min-width: 768px) and (max-width: 1200px) {
          font-size: 30px;
        }

        @media  (min-width: 1200px) {
          font-size: 30px;
        }
      }
    }

    &-card-img {
      width: 100%;
    }

    &-presenter {
      padding: 0 !important;
      margin-top: .5rem;
    }

    &-button-container {
      display: flex;
    }

    &-button {
      background-color: #d73c4b;
      color: #ffffff;
      margin: 1rem auto;
      max-width: 300px;
      border: 1px solid #d73c4b;
      border-radius: 8px;
      text-decoration: none;
      flex: 0 0 auto;
      align-items: center;
      padding: 8px 20px 10px;
    }

    &-items {
      flex: 1 1 auto;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
    }

    &-items-container {
      flex: 1 1 auto;
      margin: 10px 0 30px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }

    &-item-inner {
      flex: 1 0 270px;
    }

    &-item-block {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
    }

    &-item-text {
      padding: 0 10px;
      margin: 0;
    }

    &-item-not-included {
      color: #4f555c;
      text-decoration: line-through;
    }

    &-item-qty {
      margin: 0 5px;
    }

    &-affirm-link {
      text-decoration: underline;
      margin: .5rem 0;
    }
  }

  .center {
    display: flex;
    justify-content: center;
    font-size: 14px;
  }
</style>
