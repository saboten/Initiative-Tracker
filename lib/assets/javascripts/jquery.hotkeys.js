  


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>jquery.hotkeys/jquery.hotkeys.js at master · jeresig/jquery.hotkeys · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon-precomposed" sizes="57x57" href="apple-touch-icon-114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="apple-touch-icon-114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="apple-touch-icon-144.png" />
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="http://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="0VDgJHUGjSDkyVZicW1mqO6+szZlxR+qZMOuJFFvuDY=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-b29c8fd21c980163b52c7eba741bec96d18e5ba8.css" media="screen" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-0c22d17b5fe3c136bf438c793ff8318732e2d3a1.css" media="screen" rel="stylesheet" type="text/css" />
    


      <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-5dcdaf734c8092261f37e6534c8f114696d913a9.js" type="text/javascript"></script>
      <script src="https://a248.e.akamai.net/assets.github.com/assets/github-47a3a09fdb39a3cc73da291f394b4c33a2695b7b.js" type="text/javascript"></script>
      

        <link rel='permalink' href='/jeresig/jquery.hotkeys/blob/d73131df8a3a1a9cdfd6e5e0f740d7773d46702c/jquery.hotkeys.js'>
    <meta property="og:title" content="jquery.hotkeys"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/jeresig/jquery.hotkeys"/>
    <meta property="og:image" content="https://secure.gravatar.com/avatar/b3e04a46e85ad3e165d66f5d927eb609?s=420&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="jquery.hotkeys - jQuery Hotkeys lets you watch for keyboard events anywhere in your code supporting almost any key combination."/>
    <meta property="twitter:card" content="summary"/>
    <meta property="twitter:site" content="@GitHub">
    <meta property="twitter:title" content="jeresig/jquery.hotkeys"/>

    <meta name="description" content="jquery.hotkeys - jQuery Hotkeys lets you watch for keyboard events anywhere in your code supporting almost any key combination." />

  <link href="https://github.com/jeresig/jquery.hotkeys/commits/master.atom" rel="alternate" title="Recent Commits to jquery.hotkeys:master" type="application/atom+xml" />

  </head>


  <body class="logged_out page-blob macintosh vis-public fork env-production  ">
    <div id="wrapper">

      

      

      

      


        <div class="header header-logged-out">
          <div class="container clearfix">

            <a class="header-logo-wordmark" href="https://github.com/">
              <img alt="GitHub" class="github-logo-4x" height="30" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7@4x.png?1340659511" />
              <img alt="GitHub" class="github-logo-4x-hover" height="30" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7@4x-hover.png?1340659511" />
            </a>

              
<ul class="top-nav">
    <li class="explore"><a href="https://github.com/explore">Explore GitHub</a></li>
  <li class="search"><a href="https://github.com/search">Search</a></li>
  <li class="features"><a href="https://github.com/features">Features</a></li>
    <li class="blog"><a href="https://github.com/blog">Blog</a></li>
</ul>


            <div class="header-actions">
                <a class="button primary" href="https://github.com/signup">Sign up for free</a>
              <a class="button" href="https://github.com/login?return_to=%2Fjeresig%2Fjquery.hotkeys%2Fblob%2Fmaster%2Fjquery.hotkeys.js">Sign in</a>
            </div>

          </div>
        </div>


      

      


            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="hentry">
        
        <div class="pagehead repohead instapaper_ignore readability-menu">
          <div class="container">
            <div class="title-actions-bar">
              


<ul class="pagehead-actions">



    <li>
      <a href="/login?return_to=%2Fjeresig%2Fjquery.hotkeys"
        class="minibutton js-toggler-target star-button entice tooltipped upwards"
        title="You must be signed in to use this feature" rel="nofollow">
        <span class="mini-icon mini-icon-star"></span>Star
      </a>
      <a class="social-count js-social-count" href="/jeresig/jquery.hotkeys/stargazers">
        1,077
      </a>
    </li>
    <li>
      <a href="/login?return_to=%2Fjeresig%2Fjquery.hotkeys"
        class="minibutton js-toggler-target fork-button entice tooltipped upwards"
        title="You must be signed in to fork a repository" rel="nofollow">
        <span class="mini-icon mini-icon-fork"></span>Fork
      </a>
      <a href="/jeresig/jquery.hotkeys/network" class="social-count">
        210
      </a>
    </li>
</ul>

              <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
                <span class="repo-label"><span>public</span></span>
                <span class="mega-icon mega-icon-public-repo"></span>
                <span class="author vcard">
                  <a href="/jeresig" class="url fn" itemprop="url" rel="author">
                  <span itemprop="title">jeresig</span>
                  </a></span> /
                <strong><a href="/jeresig/jquery.hotkeys" class="js-current-repository">jquery.hotkeys</a></strong>
                  <span class="fork-flag">
                    <span class="text">forked from <a href="/tzuryby/jquery.hotkeys">tzuryby/jquery.hotkeys</a></span>
                  </span>
              </h1>
            </div>

            

  <ul class="tabs">
    <li><a href="/jeresig/jquery.hotkeys" class="selected" highlight="[:repo_source, :repo_downloads, :repo_commits, :repo_tags, :repo_branches]">Code</a></li>
    <li><a href="/jeresig/jquery.hotkeys/network" highlight="[:repo_network]">Network</a></li>
    <li><a href="/jeresig/jquery.hotkeys/pulls" highlight="[:repo_pulls]">Pull Requests <span class='counter'>12</span></a></li>




    <li><a href="/jeresig/jquery.hotkeys/graphs" highlight="[:repo_graphs, :repo_contributors]">Graphs</a></li>


  </ul>
  
<div class="tabnav">

  <span class="tabnav-right">
    <ul class="tabnav-tabs">
          <li><a href="/jeresig/jquery.hotkeys/tags" class="tabnav-tab" highlight="repo_tags">Tags <span class="counter ">1</span></a></li>
    </ul>
    
  </span>

  <div class="tabnav-widget scope">


    <div class="select-menu js-menu-container js-select-menu js-branch-menu">
      <a class="minibutton select-menu-button js-menu-target" data-hotkey="w" data-ref="master">
        <span class="mini-icon mini-icon-branch"></span>
        <i>branch:</i>
        <span class="js-select-button">master</span>
      </a>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container js-select-menu-pane">

        <div class="select-menu-modal js-select-menu-pane">
          <div class="select-menu-header">
            <span class="select-menu-title">Switch branches/tags</span>
            <span class="mini-icon mini-icon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-filters">
            <div class="select-menu-text-filter">
              <input type="text" id="commitish-filter-field" class="js-select-menu-text-filter js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
            </div> <!-- /.select-menu-text-filter -->
            <div class="select-menu-tabs">
              <ul>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
                </li>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
                </li>
              </ul>
            </div><!-- /.select-menu-tabs -->
          </div><!-- /.select-menu-filters -->

          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="branches" data-filterable-for="commitish-filter-field" data-filterable-type="substring">



              <div class="select-menu-item js-navigation-item js-navigation-target selected">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                <a href="/jeresig/jquery.hotkeys/blob/master/jquery.hotkeys.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" rel="nofollow" title="master">master</a>
              </div> <!-- /.select-menu-item -->

              <div class="select-menu-no-results js-not-filterable">Nothing to show</div>
          </div> <!-- /.select-menu-list -->


          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="tags" data-filterable-for="commitish-filter-field" data-filterable-type="substring">

              <div class="select-menu-item js-navigation-item js-navigation-target ">
                <span class="select-menu-checkmark mini-icon mini-icon-confirm"></span>
                    <a href="/jeresig/jquery.hotkeys/blob/0.1.0/jquery.hotkeys.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="0.1.0" rel="nofollow" title="0.1.0">0.1.0</a>

              </div> <!-- /.select-menu-item -->

            <div class="select-menu-no-results js-not-filterable">Nothing to show</div>

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

  </div> <!-- /.scope -->

  <ul class="tabnav-tabs">
    <li><a href="/jeresig/jquery.hotkeys" class="selected tabnav-tab" highlight="repo_source">Files</a></li>
    <li><a href="/jeresig/jquery.hotkeys/commits/master" class="tabnav-tab" highlight="repo_commits">Commits</a></li>
    <li><a href="/jeresig/jquery.hotkeys/branches" class="tabnav-tab" highlight="repo_branches" rel="nofollow">Branches <span class="counter ">1</span></a></li>
  </ul>

</div>

  
  
  


            
          </div>
        </div><!-- /.repohead -->

        <div id="js-repo-pjax-container" class="container context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:9c8078c7ca8d8df1c0ade41f984a1704 -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:9c8078c7ca8d8df1c0ade41f984a1704 -->


<div id="slider">
    <div class="frame-meta">

      <p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

        <div class="breadcrumb">
          <span class='bold'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/jeresig/jquery.hotkeys" class="js-slide-to" data-direction="back" itemscope="url"><span itemprop="title">jquery.hotkeys</span></a></span></span> / <strong class="final-path">jquery.hotkeys.js</strong> <span class="js-zeroclipboard zeroclipboard-button" data-clipboard-text="jquery.hotkeys.js" data-copied-hint="copied!" title="copy to clipboard"><span class="mini-icon mini-icon-clipboard"></span></span>
        </div>

      <a href="/jeresig/jquery.hotkeys/find/master" class="js-slide-to" data-hotkey="t" style="display:none">Show File Finder</a>


        
  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/b3e04a46e85ad3e165d66f5d927eb609?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><a href="/jeresig" rel="author">jeresig</a></span>
    <time class="js-relative-date" datetime="2010-02-22T23:07:02-08:00" title="2010-02-22 23:07:02">February 22, 2010</time>
    <div class="commit-title">
        <a href="/jeresig/jquery.hotkeys/commit/0451de18d57d3401bd4cc021facbe5fd63b5aae6" class="message">jQuery Hotkeys rewritten to work with jQuery 1.4.2. A bunch of old co…</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>1</strong> contributor</a></p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2>Users on GitHub who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/b3e04a46e85ad3e165d66f5d927eb609?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/jeresig">jeresig</a>
        </li>
      </ul>
    </div>
  </div>


    </div><!-- ./.frame-meta -->

    <div class="frames">
      <div class="frame" data-permalink-url="/jeresig/jquery.hotkeys/blob/d73131df8a3a1a9cdfd6e5e0f740d7773d46702c/jquery.hotkeys.js" data-title="jquery.hotkeys/jquery.hotkeys.js at master · jeresig/jquery.hotkeys · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="mini-icon mini-icon-text-file"></b></span>
                <span class="mode" title="File Mode">file</span>
                  <span>99 lines (81 sloc)</span>
                <span>3.08 kb</span>
              </div>
              <div class="actions">
                <div class="button-group">
                      <a class="minibutton js-entice" href=""
                         data-entice="You must be signed in and on a branch to make or propose changes">Edit</a>
                  <a href="/jeresig/jquery.hotkeys/raw/master/jquery.hotkeys.js" class="button minibutton " id="raw-url">Raw</a>
                    <a href="/jeresig/jquery.hotkeys/blame/master/jquery.hotkeys.js" class="button minibutton ">Blame</a>
                  <a href="/jeresig/jquery.hotkeys/commits/master/jquery.hotkeys.js" class="button minibutton " rel="nofollow">History</a>
                </div><!-- /.button-group -->
              </div><!-- /.actions -->

            </div>
                <div class="data type-javascript js-blob-data">
      <table cellpadding="0" cellspacing="0" class="lines">
        <tr>
          <td>
            <pre class="line_numbers"><span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
</pre>
          </td>
          <td width="100%">
                  <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/*</span></div><div class='line' id='LC2'><span class="cm"> * jQuery Hotkeys Plugin</span></div><div class='line' id='LC3'><span class="cm"> * Copyright 2010, John Resig</span></div><div class='line' id='LC4'><span class="cm"> * Dual licensed under the MIT or GPL Version 2 licenses.</span></div><div class='line' id='LC5'><span class="cm"> *</span></div><div class='line' id='LC6'><span class="cm"> * Based upon the plugin by Tzury Bar Yochay:</span></div><div class='line' id='LC7'><span class="cm"> * http://github.com/tzuryby/hotkeys</span></div><div class='line' id='LC8'><span class="cm"> *</span></div><div class='line' id='LC9'><span class="cm"> * Original idea by:</span></div><div class='line' id='LC10'><span class="cm"> * Binny V A, http://www.openjs.com/scripts/events/keyboard_shortcuts/</span></div><div class='line' id='LC11'><span class="cm">*/</span></div><div class='line' id='LC12'><br/></div><div class='line' id='LC13'><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">jQuery</span><span class="p">){</span></div><div class='line' id='LC14'><br/></div><div class='line' id='LC15'>	<span class="nx">jQuery</span><span class="p">.</span><span class="nx">hotkeys</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC16'>		<span class="nx">version</span><span class="o">:</span> <span class="s2">&quot;0.8&quot;</span><span class="p">,</span></div><div class='line' id='LC17'><br/></div><div class='line' id='LC18'>		<span class="nx">specialKeys</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC19'>			<span class="mi">8</span><span class="o">:</span> <span class="s2">&quot;backspace&quot;</span><span class="p">,</span> <span class="mi">9</span><span class="o">:</span> <span class="s2">&quot;tab&quot;</span><span class="p">,</span> <span class="mi">13</span><span class="o">:</span> <span class="s2">&quot;return&quot;</span><span class="p">,</span> <span class="mi">16</span><span class="o">:</span> <span class="s2">&quot;shift&quot;</span><span class="p">,</span> <span class="mi">17</span><span class="o">:</span> <span class="s2">&quot;ctrl&quot;</span><span class="p">,</span> <span class="mi">18</span><span class="o">:</span> <span class="s2">&quot;alt&quot;</span><span class="p">,</span> <span class="mi">19</span><span class="o">:</span> <span class="s2">&quot;pause&quot;</span><span class="p">,</span></div><div class='line' id='LC20'>			<span class="mi">20</span><span class="o">:</span> <span class="s2">&quot;capslock&quot;</span><span class="p">,</span> <span class="mi">27</span><span class="o">:</span> <span class="s2">&quot;esc&quot;</span><span class="p">,</span> <span class="mi">32</span><span class="o">:</span> <span class="s2">&quot;space&quot;</span><span class="p">,</span> <span class="mi">33</span><span class="o">:</span> <span class="s2">&quot;pageup&quot;</span><span class="p">,</span> <span class="mi">34</span><span class="o">:</span> <span class="s2">&quot;pagedown&quot;</span><span class="p">,</span> <span class="mi">35</span><span class="o">:</span> <span class="s2">&quot;end&quot;</span><span class="p">,</span> <span class="mi">36</span><span class="o">:</span> <span class="s2">&quot;home&quot;</span><span class="p">,</span></div><div class='line' id='LC21'>			<span class="mi">37</span><span class="o">:</span> <span class="s2">&quot;left&quot;</span><span class="p">,</span> <span class="mi">38</span><span class="o">:</span> <span class="s2">&quot;up&quot;</span><span class="p">,</span> <span class="mi">39</span><span class="o">:</span> <span class="s2">&quot;right&quot;</span><span class="p">,</span> <span class="mi">40</span><span class="o">:</span> <span class="s2">&quot;down&quot;</span><span class="p">,</span> <span class="mi">45</span><span class="o">:</span> <span class="s2">&quot;insert&quot;</span><span class="p">,</span> <span class="mi">46</span><span class="o">:</span> <span class="s2">&quot;del&quot;</span><span class="p">,</span> </div><div class='line' id='LC22'>			<span class="mi">96</span><span class="o">:</span> <span class="s2">&quot;0&quot;</span><span class="p">,</span> <span class="mi">97</span><span class="o">:</span> <span class="s2">&quot;1&quot;</span><span class="p">,</span> <span class="mi">98</span><span class="o">:</span> <span class="s2">&quot;2&quot;</span><span class="p">,</span> <span class="mi">99</span><span class="o">:</span> <span class="s2">&quot;3&quot;</span><span class="p">,</span> <span class="mi">100</span><span class="o">:</span> <span class="s2">&quot;4&quot;</span><span class="p">,</span> <span class="mi">101</span><span class="o">:</span> <span class="s2">&quot;5&quot;</span><span class="p">,</span> <span class="mi">102</span><span class="o">:</span> <span class="s2">&quot;6&quot;</span><span class="p">,</span> <span class="mi">103</span><span class="o">:</span> <span class="s2">&quot;7&quot;</span><span class="p">,</span></div><div class='line' id='LC23'>			<span class="mi">104</span><span class="o">:</span> <span class="s2">&quot;8&quot;</span><span class="p">,</span> <span class="mi">105</span><span class="o">:</span> <span class="s2">&quot;9&quot;</span><span class="p">,</span> <span class="mi">106</span><span class="o">:</span> <span class="s2">&quot;*&quot;</span><span class="p">,</span> <span class="mi">107</span><span class="o">:</span> <span class="s2">&quot;+&quot;</span><span class="p">,</span> <span class="mi">109</span><span class="o">:</span> <span class="s2">&quot;-&quot;</span><span class="p">,</span> <span class="mi">110</span><span class="o">:</span> <span class="s2">&quot;.&quot;</span><span class="p">,</span> <span class="mi">111</span> <span class="o">:</span> <span class="s2">&quot;/&quot;</span><span class="p">,</span> </div><div class='line' id='LC24'>			<span class="mi">112</span><span class="o">:</span> <span class="s2">&quot;f1&quot;</span><span class="p">,</span> <span class="mi">113</span><span class="o">:</span> <span class="s2">&quot;f2&quot;</span><span class="p">,</span> <span class="mi">114</span><span class="o">:</span> <span class="s2">&quot;f3&quot;</span><span class="p">,</span> <span class="mi">115</span><span class="o">:</span> <span class="s2">&quot;f4&quot;</span><span class="p">,</span> <span class="mi">116</span><span class="o">:</span> <span class="s2">&quot;f5&quot;</span><span class="p">,</span> <span class="mi">117</span><span class="o">:</span> <span class="s2">&quot;f6&quot;</span><span class="p">,</span> <span class="mi">118</span><span class="o">:</span> <span class="s2">&quot;f7&quot;</span><span class="p">,</span> <span class="mi">119</span><span class="o">:</span> <span class="s2">&quot;f8&quot;</span><span class="p">,</span> </div><div class='line' id='LC25'>			<span class="mi">120</span><span class="o">:</span> <span class="s2">&quot;f9&quot;</span><span class="p">,</span> <span class="mi">121</span><span class="o">:</span> <span class="s2">&quot;f10&quot;</span><span class="p">,</span> <span class="mi">122</span><span class="o">:</span> <span class="s2">&quot;f11&quot;</span><span class="p">,</span> <span class="mi">123</span><span class="o">:</span> <span class="s2">&quot;f12&quot;</span><span class="p">,</span> <span class="mi">144</span><span class="o">:</span> <span class="s2">&quot;numlock&quot;</span><span class="p">,</span> <span class="mi">145</span><span class="o">:</span> <span class="s2">&quot;scroll&quot;</span><span class="p">,</span> <span class="mi">191</span><span class="o">:</span> <span class="s2">&quot;/&quot;</span><span class="p">,</span> <span class="mi">224</span><span class="o">:</span> <span class="s2">&quot;meta&quot;</span></div><div class='line' id='LC26'>		<span class="p">},</span></div><div class='line' id='LC27'><br/></div><div class='line' id='LC28'>		<span class="nx">shiftNums</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC29'>			<span class="s2">&quot;`&quot;</span><span class="o">:</span> <span class="s2">&quot;~&quot;</span><span class="p">,</span> <span class="s2">&quot;1&quot;</span><span class="o">:</span> <span class="s2">&quot;!&quot;</span><span class="p">,</span> <span class="s2">&quot;2&quot;</span><span class="o">:</span> <span class="s2">&quot;@&quot;</span><span class="p">,</span> <span class="s2">&quot;3&quot;</span><span class="o">:</span> <span class="s2">&quot;#&quot;</span><span class="p">,</span> <span class="s2">&quot;4&quot;</span><span class="o">:</span> <span class="s2">&quot;$&quot;</span><span class="p">,</span> <span class="s2">&quot;5&quot;</span><span class="o">:</span> <span class="s2">&quot;%&quot;</span><span class="p">,</span> <span class="s2">&quot;6&quot;</span><span class="o">:</span> <span class="s2">&quot;^&quot;</span><span class="p">,</span> <span class="s2">&quot;7&quot;</span><span class="o">:</span> <span class="s2">&quot;&amp;&quot;</span><span class="p">,</span> </div><div class='line' id='LC30'>			<span class="s2">&quot;8&quot;</span><span class="o">:</span> <span class="s2">&quot;*&quot;</span><span class="p">,</span> <span class="s2">&quot;9&quot;</span><span class="o">:</span> <span class="s2">&quot;(&quot;</span><span class="p">,</span> <span class="s2">&quot;0&quot;</span><span class="o">:</span> <span class="s2">&quot;)&quot;</span><span class="p">,</span> <span class="s2">&quot;-&quot;</span><span class="o">:</span> <span class="s2">&quot;_&quot;</span><span class="p">,</span> <span class="s2">&quot;=&quot;</span><span class="o">:</span> <span class="s2">&quot;+&quot;</span><span class="p">,</span> <span class="s2">&quot;;&quot;</span><span class="o">:</span> <span class="s2">&quot;: &quot;</span><span class="p">,</span> <span class="s2">&quot;&#39;&quot;</span><span class="o">:</span> <span class="s2">&quot;\&quot;&quot;</span><span class="p">,</span> <span class="s2">&quot;,&quot;</span><span class="o">:</span> <span class="s2">&quot;&lt;&quot;</span><span class="p">,</span> </div><div class='line' id='LC31'>			<span class="s2">&quot;.&quot;</span><span class="o">:</span> <span class="s2">&quot;&gt;&quot;</span><span class="p">,</span>  <span class="s2">&quot;/&quot;</span><span class="o">:</span> <span class="s2">&quot;?&quot;</span><span class="p">,</span>  <span class="s2">&quot;\\&quot;</span><span class="o">:</span> <span class="s2">&quot;|&quot;</span></div><div class='line' id='LC32'>		<span class="p">}</span></div><div class='line' id='LC33'>	<span class="p">};</span></div><div class='line' id='LC34'><br/></div><div class='line' id='LC35'>	<span class="kd">function</span> <span class="nx">keyHandler</span><span class="p">(</span> <span class="nx">handleObj</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC36'>		<span class="c1">// Only care when a possible input has been specified</span></div><div class='line' id='LC37'>		<span class="k">if</span> <span class="p">(</span> <span class="k">typeof</span> <span class="nx">handleObj</span><span class="p">.</span><span class="nx">data</span> <span class="o">!==</span> <span class="s2">&quot;string&quot;</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC38'>			<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC39'>		<span class="p">}</span></div><div class='line' id='LC40'><br/></div><div class='line' id='LC41'>		<span class="kd">var</span> <span class="nx">origHandler</span> <span class="o">=</span> <span class="nx">handleObj</span><span class="p">.</span><span class="nx">handler</span><span class="p">,</span></div><div class='line' id='LC42'>			<span class="nx">keys</span> <span class="o">=</span> <span class="nx">handleObj</span><span class="p">.</span><span class="nx">data</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">().</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot; &quot;</span><span class="p">);</span></div><div class='line' id='LC43'><br/></div><div class='line' id='LC44'>		<span class="nx">handleObj</span><span class="p">.</span><span class="nx">handler</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">event</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC45'>			<span class="c1">// Don&#39;t fire in text-accepting inputs that we didn&#39;t directly bind to</span></div><div class='line' id='LC46'>			<span class="k">if</span> <span class="p">(</span> <span class="k">this</span> <span class="o">!==</span> <span class="nx">event</span><span class="p">.</span><span class="nx">target</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="sr">/textarea|select/i</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span> <span class="nx">event</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nx">nodeName</span> <span class="p">)</span> <span class="o">||</span></div><div class='line' id='LC47'>				 <span class="nx">event</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nx">type</span> <span class="o">===</span> <span class="s2">&quot;text&quot;</span><span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC48'>				<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC49'>			<span class="p">}</span></div><div class='line' id='LC50'><br/></div><div class='line' id='LC51'>			<span class="c1">// Keypress represents characters, not special keys</span></div><div class='line' id='LC52'>			<span class="kd">var</span> <span class="nx">special</span> <span class="o">=</span> <span class="nx">event</span><span class="p">.</span><span class="nx">type</span> <span class="o">!==</span> <span class="s2">&quot;keypress&quot;</span> <span class="o">&amp;&amp;</span> <span class="nx">jQuery</span><span class="p">.</span><span class="nx">hotkeys</span><span class="p">.</span><span class="nx">specialKeys</span><span class="p">[</span> <span class="nx">event</span><span class="p">.</span><span class="nx">which</span> <span class="p">],</span></div><div class='line' id='LC53'>				<span class="nx">character</span> <span class="o">=</span> <span class="nb">String</span><span class="p">.</span><span class="nx">fromCharCode</span><span class="p">(</span> <span class="nx">event</span><span class="p">.</span><span class="nx">which</span> <span class="p">).</span><span class="nx">toLowerCase</span><span class="p">(),</span></div><div class='line' id='LC54'>				<span class="nx">key</span><span class="p">,</span> <span class="nx">modif</span> <span class="o">=</span> <span class="s2">&quot;&quot;</span><span class="p">,</span> <span class="nx">possible</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC55'><br/></div><div class='line' id='LC56'>			<span class="c1">// check combinations (alt|ctrl|shift+anything)</span></div><div class='line' id='LC57'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">event</span><span class="p">.</span><span class="nx">altKey</span> <span class="o">&amp;&amp;</span> <span class="nx">special</span> <span class="o">!==</span> <span class="s2">&quot;alt&quot;</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC58'>				<span class="nx">modif</span> <span class="o">+=</span> <span class="s2">&quot;alt+&quot;</span><span class="p">;</span></div><div class='line' id='LC59'>			<span class="p">}</span></div><div class='line' id='LC60'><br/></div><div class='line' id='LC61'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">event</span><span class="p">.</span><span class="nx">ctrlKey</span> <span class="o">&amp;&amp;</span> <span class="nx">special</span> <span class="o">!==</span> <span class="s2">&quot;ctrl&quot;</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC62'>				<span class="nx">modif</span> <span class="o">+=</span> <span class="s2">&quot;ctrl+&quot;</span><span class="p">;</span></div><div class='line' id='LC63'>			<span class="p">}</span></div><div class='line' id='LC64'><br/></div><div class='line' id='LC65'>			<span class="c1">// TODO: Need to make sure this works consistently across platforms</span></div><div class='line' id='LC66'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">event</span><span class="p">.</span><span class="nx">metaKey</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">event</span><span class="p">.</span><span class="nx">ctrlKey</span> <span class="o">&amp;&amp;</span> <span class="nx">special</span> <span class="o">!==</span> <span class="s2">&quot;meta&quot;</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC67'>				<span class="nx">modif</span> <span class="o">+=</span> <span class="s2">&quot;meta+&quot;</span><span class="p">;</span></div><div class='line' id='LC68'>			<span class="p">}</span></div><div class='line' id='LC69'><br/></div><div class='line' id='LC70'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">event</span><span class="p">.</span><span class="nx">shiftKey</span> <span class="o">&amp;&amp;</span> <span class="nx">special</span> <span class="o">!==</span> <span class="s2">&quot;shift&quot;</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC71'>				<span class="nx">modif</span> <span class="o">+=</span> <span class="s2">&quot;shift+&quot;</span><span class="p">;</span></div><div class='line' id='LC72'>			<span class="p">}</span></div><div class='line' id='LC73'><br/></div><div class='line' id='LC74'>			<span class="k">if</span> <span class="p">(</span> <span class="nx">special</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC75'>				<span class="nx">possible</span><span class="p">[</span> <span class="nx">modif</span> <span class="o">+</span> <span class="nx">special</span> <span class="p">]</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC76'><br/></div><div class='line' id='LC77'>			<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC78'>				<span class="nx">possible</span><span class="p">[</span> <span class="nx">modif</span> <span class="o">+</span> <span class="nx">character</span> <span class="p">]</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC79'>				<span class="nx">possible</span><span class="p">[</span> <span class="nx">modif</span> <span class="o">+</span> <span class="nx">jQuery</span><span class="p">.</span><span class="nx">hotkeys</span><span class="p">.</span><span class="nx">shiftNums</span><span class="p">[</span> <span class="nx">character</span> <span class="p">]</span> <span class="p">]</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC80'><br/></div><div class='line' id='LC81'>				<span class="c1">// &quot;$&quot; can be triggered as &quot;Shift+4&quot; or &quot;Shift+$&quot; or just &quot;$&quot;</span></div><div class='line' id='LC82'>				<span class="k">if</span> <span class="p">(</span> <span class="nx">modif</span> <span class="o">===</span> <span class="s2">&quot;shift+&quot;</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC83'>					<span class="nx">possible</span><span class="p">[</span> <span class="nx">jQuery</span><span class="p">.</span><span class="nx">hotkeys</span><span class="p">.</span><span class="nx">shiftNums</span><span class="p">[</span> <span class="nx">character</span> <span class="p">]</span> <span class="p">]</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC84'>				<span class="p">}</span></div><div class='line' id='LC85'>			<span class="p">}</span></div><div class='line' id='LC86'><br/></div><div class='line' id='LC87'>			<span class="k">for</span> <span class="p">(</span> <span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">l</span> <span class="o">=</span> <span class="nx">keys</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">l</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC88'>				<span class="k">if</span> <span class="p">(</span> <span class="nx">possible</span><span class="p">[</span> <span class="nx">keys</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="p">]</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC89'>					<span class="k">return</span> <span class="nx">origHandler</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span> <span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span> <span class="p">);</span></div><div class='line' id='LC90'>				<span class="p">}</span></div><div class='line' id='LC91'>			<span class="p">}</span></div><div class='line' id='LC92'>		<span class="p">};</span></div><div class='line' id='LC93'>	<span class="p">}</span></div><div class='line' id='LC94'><br/></div><div class='line' id='LC95'>	<span class="nx">jQuery</span><span class="p">.</span><span class="nx">each</span><span class="p">([</span> <span class="s2">&quot;keydown&quot;</span><span class="p">,</span> <span class="s2">&quot;keyup&quot;</span><span class="p">,</span> <span class="s2">&quot;keypress&quot;</span> <span class="p">],</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC96'>		<span class="nx">jQuery</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nx">special</span><span class="p">[</span> <span class="k">this</span> <span class="p">]</span> <span class="o">=</span> <span class="p">{</span> <span class="nx">add</span><span class="o">:</span> <span class="nx">keyHandler</span> <span class="p">};</span></div><div class='line' id='LC97'>	<span class="p">});</span></div><div class='line' id='LC98'><br/></div><div class='line' id='LC99'><span class="p">})(</span> <span class="nx">jQuery</span> <span class="p">);</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>

        <a href="#jump-to-line" rel="facebox" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
        <div id="jump-to-line" style="display:none">
          <h2>Jump to Line</h2>
          <form accept-charset="UTF-8" class="js-jump-to-line-form">
            <input class="textfield js-jump-to-line-field" type="text">
            <div class="full-button">
              <button type="submit" class="button">Go</button>
            </div>
          </form>
        </div>

      </div>
    </div>
</div>

<div id="js-frame-loading-template" class="frame frame-loading large-loading-area" style="display:none;">
  <img class="js-frame-loading-spinner" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-128.gif?1347543527" height="64" width="64">
</div>


        </div>
      </div>
      <div class="context-overlay"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer">
  <div class="container clearfix">

      <dl class="footer_nav">
        <dt>GitHub</dt>
        <dd><a href="https://github.com/about">About us</a></dd>
        <dd><a href="https://github.com/blog">Blog</a></dd>
        <dd><a href="https://github.com/contact">Contact &amp; support</a></dd>
        <dd><a href="http://enterprise.github.com/">GitHub Enterprise</a></dd>
        <dd><a href="http://status.github.com/">Site status</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Applications</dt>
        <dd><a href="http://mac.github.com/">GitHub for Mac</a></dd>
        <dd><a href="http://windows.github.com/">GitHub for Windows</a></dd>
        <dd><a href="http://eclipse.github.com/">GitHub for Eclipse</a></dd>
        <dd><a href="http://mobile.github.com/">GitHub mobile apps</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Services</dt>
        <dd><a href="http://get.gaug.es/">Gauges: Web analytics</a></dd>
        <dd><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></dd>
        <dd><a href="https://gist.github.com">Gist: Code snippets</a></dd>
        <dd><a href="http://jobs.github.com/">Job board</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Documentation</dt>
        <dd><a href="http://help.github.com/">GitHub Help</a></dd>
        <dd><a href="http://developer.github.com/">Developer API</a></dd>
        <dd><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></dd>
        <dd><a href="http://pages.github.com/">GitHub Pages</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>More</dt>
        <dd><a href="http://training.github.com/">Training</a></dd>
        <dd><a href="https://github.com/edu">Students &amp; teachers</a></dd>
        <dd><a href="http://shop.github.com">The Shop</a></dd>
        <dd><a href="/plans">Plans &amp; pricing</a></dd>
        <dd><a href="http://octodex.github.com/">The Octodex</a></dd>
      </dl>

      <hr class="footer-divider">


    <p class="right">&copy; 2013 <span title="0.04322s from fe16.rs.github.com">GitHub</span> Inc. All rights reserved.</p>
    <a class="left" href="https://github.com/">
      <span class="mega-icon mega-icon-invertocat"></span>
    </a>
    <ul id="legal">
        <li><a href="https://github.com/site/terms">Terms of Service</a></li>
        <li><a href="https://github.com/site/privacy">Privacy</a></li>
        <li><a href="https://github.com/security">Security</a></li>
    </ul>

  </div><!-- /.container -->

</div><!-- /.#footer -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/jeresig/jquery.hotkeys/suggestions/commit/d73131df8a3a1a9cdfd6e5e0f740d7773d46702c">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-icon mega-icon-normalscreen"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="mini-icon mini-icon-brightness"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="mini-icon mini-icon-exclamation"></span>
      Something went wrong with that request. Please try again.
      <a href="#" class="mini-icon mini-icon-remove-close ajax-error-dismiss"></a>
    </div>

    
    
    <span id='server_response_time' data-time='0.04380' data-host='fe16'></span>
    
  </body>
</html>

