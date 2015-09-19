Assumptions
===========

As you're going through this document, I make some assumptions about your system and the type of project that you're trying to package.
Specifically, I assume that:

- You're working on Ubuntu 14.04 LTS (trusty).
  If you're not sure of your Ubuntu version, run a ``lsb_release -a`` to check.
- Your project is managed by the `git`_ version control system.
- Your project is a C++ library, application, whatever.
- Your project uses the `CMake`_ build system.
- You want to publish your Ubuntu package as a part of a `PPA`_.

These instructions might work for setups slightly/very different than the one described above, but your mileage may vary.

.. note::

    If you're on OSX or Windows, you can use `Vagrant`_ to get a Ubuntu 14.04 LTS system.

.. _git: https://git-scm.com/
.. _CMake: http://www.cmake.org/
.. _PPA: https://help.launchpad.net/Packaging/PPA
.. _Vagrant: https://www.vagrantup.com/
