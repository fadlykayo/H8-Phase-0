<!DOCTYPE html>
<html>

<head>
  <link href="index.css" type="text/css" rel="stylesheet">
  <title>Fadly Kayo's Webpage</title>
</head>

<body>
  <div class="header">
    <h1>Fadly Kayo's Webpage</h1>

    <h2>Welcome everyone!</h2>
  </div>

  <div class="body">

    <img src="2.jpg">

    <p>Hi, I am Fadly Kayo and this is my first webpage. Let's be a fullstack developer with Hacktiv8.</p>

    <p>This is my target list:
      <ol>
        <li>Being fullstack developer</li>
        <li>Create a wonderful website</li>
      </ol>
    </p>

    <p>Here is my contact:
      <ul>
        <li>Email: f_kayo@yahoo.com</li>
        <li>Phone: +6281806070868</li>
      </ul>
    </p>

    <p>My daily routine:</p>

    <table>
      <thead>
        <tr>
          <th></th>
          <th>Morning</th>
          <th>Afternoon</th>
          <th>Evening</th>
          <th>Night</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <th scope="row">Monday</th>
          <td colspan="4" rowspan="7">Eat, Coding, & Sleep</td>
        </tr>
         <tr>
          <th scope="row">Tuesday</th>
        </tr>
         <tr>
          <th scope="row">Wednesday</th>
        </tr>
         <tr>
          <th scope="row">Thursday</th>
        </tr>
         <tr>
          <th scope="row">Friday</th>
        </tr>
         <tr>
          <th scope="row">Saturday</th>
        </tr>
         <tr>
          <th scope="row">Sunday</th>
        </tr>
      </tbody>
    </table>

  </div>

  <div class="comment">
    <h3>
      Leave your comment below:
    </h3>

    <form>
       <label for="first-name">First Name:</label>
       <br />
       <input name="first-name" id="first-name" type="text">
       <br />
       <br />
       <label for="last-name">Last Name:</label>
       <br />
       <input name="last-name" id="last-name" type="text">
       <br />
       <br />
       <label for="gender">Gender:</label>
       <br />
       <input type="radio" name="gender" value="male">Male
       <br />
       <input type="radio" name="gender" value="female">Female
       <br />
       <br />
       <label for="fav-car">Favorite Cars:</label>
       <br />
         <select name="fav-car">
           <option value="1">Honda</option>
           <option value="2">Toyota</option>
           <option value="3">BMW</option>
           <option value="4">Audi</option>
           <option value="5">Mercedes-Benz</option>
         </select>
       <!--
       <input type="text" name="fav-car" list="carList"/>
       <datalist id="carList">
         <option value="Honda"></option>
         <option value="Toyota"></option>
         <option value="Audi"></option>
         <option value="BMW"></option>
         <option value="Mercedes-Benz"></option>
       </datalist>
       -->
       <br />
       <br />
       <label for="lang">Language Spoken:</label>
       <br />
       <input type="checkbox" name="lang" value="indo">Bahasa Indonesia
       <br />
       <input type="checkbox" name="lang" value="eng">English
       <br />
       <input type="checkbox" name="lang" value="other">Other
       <br />
       <br />
       <label for="bio">Bio:</label>
       <br />
       <textarea cols="40" rows="10"></textarea>
       <br />
       <br />
       <input type="submit" value="Submit">
     </form>
  </div>
</body>
</html>
