import React from 'react';

import './Toolbar.css';

const toolbar =  props => (
<header className="toolbar">
<nav className="toolbar_navigation">
    <div></div>
<div className="toolbar_keep"><a href="/">GOOGLE KEEP</a><br/></div>
<div className="toolbar_navigation-items"> 
    <ul>
<a href="/">Notes</a><br/>
<a href="/">Reminders</a><br/>
<a href="/">Create new label</a><br/>
<a href="/">Archive</a><br/>
<a href="/">Trash</a><br/>
<a href="/">Settings</a><br/>
<a href="/">Send Feedback</a><br/>
<a href="/">Help</a><br/>
<a href="/">App Downloads</a><br/>
<a href="/">Keyboard Shortcuts</a><br/>
</ul>
</div>
</nav>
</header>

);

export default toolbar;