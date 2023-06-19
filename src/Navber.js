import React from 'react'

function Navber() {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="index.html"><img src="ads/img/logo.png" width={80} alt=""/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active px-5" aria-current="page" href="index.html">Home</a>
        <a class="nav-link px-5" href="#PG-R1">PG R1</a>
        <a class="nav-link px-5" href="#PG-V9">PG V9</a>
        <a class="nav-link px-5" href="#PG-phone">PG phone</a>
      </div>
    </div>
  </div>
</nav>
      
    </>
  )
}

export default Navber
