const BuildPage = (index) => (
    <>
      <h3>Page {index}</h3>
      <div>
        Page {index}
      </div>
    </>
  );

  const P404 = () => ( 
    <body> 
      <div class="error-container"> 
        <h1> 404 </h1> 
        <p> 
          Oops! The page you're 
          looking for is not here. 
        </p> 
        <a href="http://localhost:3000"> 
          Go Back to Home 
        </a> 
      </div> 
    </body> 
  )
  
  export const Page404 = () => P404();
  export const PageOne = () => BuildPage(1);
  export const PageTwo = () => BuildPage(2);