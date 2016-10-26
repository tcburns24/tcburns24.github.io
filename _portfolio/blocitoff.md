---
layout: post
title: Blocitoff
thumbnail-path: "img/blocitoff_screen_shot.png"
short-description: Build a self-destructing to-do list application.

---

{:.center}
[<img src="/img/blocitoff_screen_shot.png">](https://github.com/tcburns24/Blocitoff)


## Explanation

Blocitoff is designed to be a 3-dimensional to-do list. Even the most efficient among us can't help but sometimes look down at a static to-do list as its items grow cobwebs. Blocitoff's timer and auto-delete are its hallmark features; rather than succumb to feelings of hopelessness as items on your to-do list linger, Blocitoff keeps your to-do list fresh an stocked with only your most pressing tasks.


## Obstacle

Programming Blocitoff's timer function was an obstacle; I found each item's "time-until-delete" inaccurate or not moving. Obviously, this is the primary feature of Blocitoff, without this feature Blocitoff amounts to no more than an online post-it note.

## Solution

After some brainstorming with friends, I discovered my error lay not in the code, per se, but in my math. A quick adjustment to my math in the items controller, and the problem was solved. I wrapped this code in the table body to form the solution:
{% highlight ruby %}
<%= content_tag :tr, class: 'info', id: "item-#{item.id}" do %>
  <td><%= item.name %></td>
  <td><%= link_to "", [current_user, item], method: :delete, class: 'glyphicon glyphicon-ok', remote: true %></td>
  <td><%= distance_of_time_in_words(7.days - (Time.now - item.created_at)) %></td>
<% end %>
{% endhighlight %}


## Results

Blocitoff now functions as intended. Items auto-delete after 7 days, and the app's table view make adding & deleting items simple.


## Conclusion

Building Blocitoff served as a reminder that programming is a highly collaborative art; problems are best solved by teaming up with others. This is true not only for debugging, but other tasks as well. Designing, executing, remodeling are all done best in teams.
