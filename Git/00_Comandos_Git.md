### **Git Stash**

```shell
git stash  #guarda los cambios temporalmente en memoria cuando no quieres hacer un commit aun
git stash save “mensaje” #guarda un stach con mensaje
git stash list #muestra la lista de cambios temporales
git stash pop  #trae de vuelta los cambios que teníamos guardados en el ultimo stash
git stash apply stash@{n}  #trae el stash que necesites con indicar su número dentro de las llaves
git stash drop  #borra el ultimo stash
git stash clear #borra todos los stash
-------
#Incluye en el stash 
git stash save -u "Temp stage"

git stash apply stash@{<num_stash>}
git stash branch <nombre_de_la_rama>

#Si deseas crear una rama y aplicar un stash específico (obtenido desde git stash list) puedes utilizar el comando:
git stash branch nombre_de_rama stash@{<num_stash>}
```



### **Comandos generales**

```shell
# ==================
# Comandos Git
# https://www.cloudbees.com/blog/git-undo-commit
# https://desarrolloweb.com/articulos/descartar-cambios-archivos-git.html
# ==================

# ==================
# Use Git reflog to check commits history.
# ==================
Git reflog
git log --pretty=format:"%h %s" --graph

# ==================
# Para guardar todos los cambios desde la rama en la que se esta posicionado
git add -A  
git commit -m "create page 4"

# Opciones para hacer Push de tus cambios
git push <nombre-remoto> <nombre-de-tu-rama>
-- 
git push -u origin <nombre-de-tu-rama>

# ==================
# Git Merge
git checkout <nombre-de-la-rama>
git pull <nombre-remoto>

# Antes de fusionar, debes actualizar tu rama dev local:
git fetch
git merge <nombre-de-la-rama>

# ==================
#  Para descartar todos los cambios
Git reset .
Git reset --hard

# Otra forma es especificanto el ID
Git reset --hard <commit id>

# Revertir todos los cambios
Git checkout -- 

# ==================
#  Para editar el ultimo Commit
Git commit --amend
Git commit --amend -m "Aqui va el mensaje"
i
:wq!

# Ver ramas remotas
git branch -a

# Eliminar rama remota
git push origin :nombre-rama
```



