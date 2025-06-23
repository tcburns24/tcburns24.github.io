---
layout: post
title: Athletic Director Management App
thumbnail-path: "img/athletic_director.png"
short-description: A CRUD app with PostgreSQL, NodeJS, and Angular.
stack-images: ["img/node.png", "img/postgresql.png", "img/angular.png"]
---

{:.center}
[<img src="/img/athletic_director.png">](https://athletic-director-management-app.netlify.app/)

## What Is It?

A relatively straightforward CRUD app deseigned for athletic directors to manage the student-athletes at their college or university. Add, update, and delete functionalities on full display.

## What's In It?

• <strong>Database:</strong> PostgreSQL (hosted by our friends at Neon) <br />
• <strong>Backend:</strong> NodeJS <br />
• <strong>Frontend:</strong> AngularJS <br />

## How'd I Build it?

First I designed the database schema (that took a few revisions). The schema involves 2 tables ("athletes" and "sports") connected via a foreign key. Then I built out the API endpoints in Node, and finally added a nifty, modern UI with Angular.

### Github Repo

[github.com/tcburns24/angular-crud](https://github.com/tcburns24/angular-crud)

### Web App

[The Real Deal](https://athletic-director-management-app.netlify.app/)
