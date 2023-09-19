<?xml version="1.0"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">



<xsl:template match="/">
  <html>
  <head>
    <link rel="stylesheet" href="styleX.css"/>
  </head>
  <body>

<a href="index.html" style="margin: 20px; margin-bottom:0px; display:inline-block;">--Back to home page</a>

    <h1>My Blogs</h1>

    

      <xsl:for-each select="blogss/blog">
        <div class="blog">
          <h2 class="title"><xsl:value-of select="title"/></h2>
          <p class="date"><xsl:value-of select="date"/></p>
          <p class="content"><xsl:value-of select="content"/></p>
          <p class="author"><xsl:value-of select="author"/></p>
        </div>
      </xsl:for-each>


  </body>
  </html>
</xsl:template>

</xsl:stylesheet>