Creating an Ubuntu package for a C++ project managed by git
===========================================================

So you've got a C++ library that is under git version control, and you'd like to create an Ubuntu package for it so that other people out there in the big wide world can easily install your stuff.
Piece of cake, right?

Nope.

I'm sure it's simple if you've done it before, but if you're new to the Debian/Ubuntu packaging world it's pretty non-trivial to actually create the package scripts, build the package, and upload it to `launchpad`_ the right way.
These words hope to guide you through the process, so you can create your package a bit more quickly than I was able to.

As with everything documentation related, take everything here with a grain of salt, especially as things age.
Entropy always wins, and eventually this will all be out of date.
Until then, though, I hope it's helpful.

.. toctree::
    :maxdepth: 2

    assumptions
    ubuntu-packaging-setup

.. _launchpad: https://launchpad.net/
