# OnlineTAT
<b>Online Technical Assessment Tool</b>

Download the code from the git hub using below git command

c:\> git clone <https://github.com/rkulkar5/OnlineTAT.git> 

Open the command prompt and CD to the directory where the Git repository is downloaded, 
<br>and then from the <b>"../client" </b>directory run the following command, 
that will donwload all the Angular libraries in node_modules directory

<code>npm update</code>
   
Similarly from <b>../server </b> direcotry run the <code>npm update</code> to download NodeJs libraries
  
  
<b>Basic Git commands</b>
```
git status - lists all new an modified files that are not yet commited
git add  - adds a change in the working directory to the staging area
git commit -m "commit message" --> saves your changes to the local repository
git push - upload local repository content to a remote repository
git pull - download or update your local repo with the contents from a remote repository
```

git stash list
git stash clear
git stash drop stash@{index} 

<b>Basic Angular and NodeJS commands</b>
```
C:\..\client> ng serve - starts the angular server
C:\..\client> ng generate component <Component_Name> - Adds new components
C:\..\client> ng service <service_Name> - adds new service 
C:\..\server> node <index.js or app.js>
              or
C:\..\server> npm start  -  to start node js server
```
