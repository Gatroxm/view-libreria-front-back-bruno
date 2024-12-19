<script>
import axios from 'axios';
import { ref, onMounted  } from 'vue';

export default {
    setup() {
        const libros = ref([])
        const listarLibros = async () => {
            try {
                const response = await axios.get('http://localhost:3000/libros')
                libros.value = response.data;
                console.log(libros.value)
            } catch (error) {
                console.error("el error es", error)
            }
        }
        
        const eliminarLibro = async (id, titulo) => {
            const confimDelete = confirm(`Estas seguro que deseas eliminar el libro ${titulo}?`);
            if (!confimDelete) return;
            try {
                await axios.delete(`http://localhost:3000/libros/${id}`)
                listarLibros();
            } catch (error) {
                console.error("el error es", error)
            }
        }
        onMounted(listarLibros);
        return {
            libros,
            eliminarLibro
        }
    }
}

</script>

<template>
  <main class="libros">
    <h1>Libros</h1>
    <table>
        <thead>
            <tr>
            <th>ID</th>
            <th>Titulo</th>
            <th>Autor</th>
            <th>Editorial</th>
            <th>Categoria</th>
            <th>Fecha</th>
            <th>Paginas</th>
            <th>Stock</th>
            <th>Disonibilidad</th>
            <th>Acciones</th>
        </tr>
        </thead>
        <tbody>
            <tr v-for="libro in libros" :key="libro.id">
            <td>{{ libro.id }}</td>
            <td>{{ libro.titulo }}</td>
            <td>{{ libro.autor }}</td>
            <td>{{ libro.editorial }}</td>
            <td>{{ libro.categoria }}</td>
            <td>{{ libro.fecha }}</td>
            <td>{{ libro.paginas }}</td>
            <td>{{ libro.stock }}</td>
            <td>{{ libro.disponibilidad }}</td>
            <td class="actions">
                <button @click="$router.push({ name: 'editarlibro', params: { id: libro.id } })">Editar</button>
                <button @click="eliminarLibro(libro.id, libro.titulo)">Eliminar</button>
            </td>
        </tr>
        </tbody>
    </table>
  </main>
</template>
<style scoped>
table{
    width: 100%;
    border-collapse: collapse;
}
th, td{
    padding: 10px;
    text-align: left;
}
th{
    background-color: #007bff;
    color: white;
}
button{
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
}
.actions button{
    margin: 0 10px;
}
.actions{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
}
.libros {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.libros-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.libro {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 10px;
}
.libro img {
  width: 200px;
  height: 300px;
}
.libro-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 10px;
}
</style>