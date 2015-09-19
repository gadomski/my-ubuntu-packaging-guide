Ubuntu packaging setup
======================

Ubuntu manages packages through `Launchpad`_, which handles storing, building, and distributing software packages.
In order to create and distribute packages of your own, you need a Launchpad account and a system that can upload packages to it.

These instructions are derived from those at:

- http://packaging.ubuntu.com/html/getting-set-up.html


Create a Launchpad account
--------------------------

Use https://login.launchpad.net/+login to create an account.


Create and upload your gpg key
------------------------------

Launchpad requires that all packages are signed with a `gpg`_ key.
To create a key, first install the GNU privacy guard::

    $ sudo apt-get install gnupg

Then, create your key::

    $ gpg --gen-key

You'll have to go through some setup steps, of which the defaults are all fine.
Definitely create a passphrase, though.
Then gpg will need some entropy to create a random key, which could take a while.
It might suggest you move your mouse or perform other OS actions to give it some random bits to play with -- I suggest you follow its advice.
Eventually, gpg will spit out some info about your key (taken directly from the Ubuntu packaging guide)::

    pub   4096R/43CDE61D 2010-12-06
    Key fingerprint = 5C28 0144 FB08 91C0 2CF3  37AC 6F0B F90F 43CD E61D
    uid                  Daniel Holbach <dh@mailempfang.de>
    sub   4096R/51FBE68C 2010-12-06

The ``43CDE61D`` is your key id, and ``5C28 0144 FB08 91C0 2CF3  37AC 6F0B F90F 43CD E61D``, which you'll need later.
Upload that to the Ubuntu keyserver::

    $ gpg --send-keys --keyserver keyserver.ubuntu.com <KEY ID>

Launchpad will take a bit (maybe about 10 minutes) to accept and process the key, so go make a cup of tea or do some other part of this setup guide for a bit before you roll on.

After a bit, you can go to https://launchpad.net/~/+editpgpkeys and type in your key fingerprint (from above, that long string with a bunch of four-character clumps).
That will set off a GUI-rific chain of emails and such which will culminate in you decrypting a piece of an email message, the contents of which contain a authorization link.
To decrypt that portion of an email message, I copy-pasted the GPG portion of the email to a file on my system, then ran::

    $ gpg --decrypt <my message file>

This should spit out the contents of the message, which you can then use to navigate back to the Launchpad confirmation link and join up your gpg key with your Launchpad account.
Whew.

.. _launchpad: https://launchpad.net/
.. _gpg: https://www.gnupg.org/
