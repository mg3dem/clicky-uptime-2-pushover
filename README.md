clicky-uptime-2-pushover
========================

A small node.js application to send uptime alerts from **[Clicky][]** analytics as a mobile notification using [Pushover][] service. Built on top of **[Express][]**, **[node-pushover][]** and **[XDate][]**

Running
-------

You need **node.js** and **npm** on your system.

```bash
npm install
node app.js
```
NOTE: You need a public IP/URL to be reached from **[Clicky][]**

Using
-----

The latest version is deployed on **Appfog** and can be used by anyone using the following url as webhook URL:

http://clicky-uptime-2-pushover.aws.af.cm/&lt;user-key>

Replacing &lt;user-key> with the user key from **Pushover**


License
-------
Copyright (c) 2013 Miguel Gallardo <miguel@tuproximotrabajo.com>.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

[Clicky]: https://clicky.com/
[Pushover]:https://pushover.net/
[Express]:http://expressjs.com/
[node-pushover]: https://github.com/qbit/node-pushover
[XDate]: http://arshaw.com/xdate/