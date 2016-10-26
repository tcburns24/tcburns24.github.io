---
layout: post
title: WikiOne
thumbnail-path: "img/wikione_screen_shot.png"
short-description: A production quality SaaS app that allows users to create their own wikis.

---

{:.center}
[<img src="/img/wikione_screen_shot.png">](https://github.com/tcburns24/WikiOne)

## Explanation

The Blocipedia project calls for a wikipedia look-alike with 3 tiers of users; standard, premium, and admin. Each tier of user is privy to different actions within the app. At its core, WikiOne is a simple social app where users can come to exchange ideas and comments.

## Obstacle

Stripe implementation was the challenge du jour. Doing this meant journeying outside the Bloc bubble and into another company's API. Although this can make a new developer anxious, venturing into colleagues' work is a critical part of our industry.

## Solution

Stripe made it quick and simple to utilize their code. After a quick copy & paste, then a few sample user upgrades, Stripe was fully functional in WikiOne. Some of the code in the New Charges view is below:
{% highlight ruby %}
<script src="https://checkout.stripe.com/checkout.js" class="stripe-button"
        data-key="<%= ENV['STRIPE_PUBLISHABLE_KEY'] %>"
        data-description="Premium WikiOne Membership - #{current_user.username}"
        data-amount="$19.99"
        data-locale="auto">
</script>
{% endhighlight %}


## Conclusion

WikiOne is a testament to Rails' complex, but still user-friendly demeanor. Although the programming stages were difficult and sometimes frustrating, the results are gratifying. I'd recommend WikiOne to anyone seeking an earnest look into what Rails can provide.
