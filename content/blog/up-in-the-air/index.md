---
title: Up in the air - Part 1
date: "2019-10-29T22:12:03.284Z"
description: "GCP"
---

With most of my side projects that require heavier computation, I tend to run my tasks with my desktop at home. It has been serving me pretty well until recently, when it has been feeling really inconvenient that I can be running stuff on it on the go.

Which led me to exploring more options on Google's Google Cloud Platform (GCP).

Like all the mainstream cloud services such as AWS and Azure, there are tons of APIs available, each serving a specific purpose, and at time, several services have overlapping functionality.

So far, there seems to be three main options for me:

1. Running tasks off a VM instance, using the Compute Engine, which with some tweaking allowed me to work on python notebooks using Jupyter.

2. Running a Google datalab VM instance which allows me to run tasks off an interface similar to Jupyter.

3. Google Collaboratory which is free.

It has been fun trying out all three options, and currently I'm leaning towards using options 2 and 3. Its much easier to set up for Collaboratory, but it seems Datalab is the better way to go if there is a need for bigger projects. Datalabs work on top of docker which allows for containerization :)

I'll give an update with more details on my next post!