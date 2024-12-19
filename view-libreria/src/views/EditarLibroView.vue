<script>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';

export default {
    setup() {
        const router = useRouter()
        const libro = ref({
            id: '',
            titulo: '',
            autor: '',
            editorial: '',
            categoria: '',
            fecha: '',
            paginas: '',
            stock: '',
            imagen: '',
            disponibilidad: true
        })
        const cargarLobro = async () => {
            const { id } = useRoute().params;
            try {
                const response = await axios.get(`http://localhost:3000/libros/${id}`)
                libro.value = response.data;
            } catch (error) {
                console.error("el error es", error)
            }
        }
        onMounted(cargarLobro);
        const guardar = async () => {
            try {
              console.log(libro.value.id)
                const response = await axios.put(`http://localhost:3000/libros/${libro.value.id}`, libro.value)
                setTimeout(() => {
                    alert('El libro ha sido guardado correctamente')
                    router.push("/")
                }, 200)
                console.log(response.data)
            } catch (error) {
                console.error("el error es", error)
            }
        };
        return {
            libro,
            guardar
        }
    }
}

</script>

<template>
    <main class="nuevo-libro">
        <h1>Editar Libro</h1>
        <form @submit.prevent="guardar">            
            <div class="form-group">
                <label for="titulo">Titulo</label>
                <input type="text" id="titulo" v-model="libro.titulo" required>
            </div>
            <div class="form-group">
                <label for="autor">Autor</label>
                <input type="text" id="autor" v-model="libro.autor" required>
            </div>
            <div class="form-group">
                <label for="editorial">Editorial</label>
                <input type="text" id="editorial" v-model="libro.editorial" required>
            </div>
            <div class="form-group">
                <label for="categoria">Categoria</label>
                <input type="text" id="categoria" v-model="libro.categoria" required>
            </div>
            <div class="form-group">
                <label for="fecha">Fecha</label>
                <input type="date" id="fecha" v-model="libro.fecha" required>
            </div>
            <div class="form-group">
                <label for="paginas">Paginas</label>
                <input type="number" id="paginas" v-model="libro.paginas" required>
            </div>
            <div class="form-group">
                <label for="stock">Stock</label>
                <input type="number" id="stock" v-model="libro.stock" required>
            </div>
            <div class="form-group">
                <label for="imagen">Imagen</label>
                <input type="text" id="imagen" v-model="libro.imagen" required>
            </div>
            <div class="form-group">
                <label for="disponibilidad">Disponibilidad</label>
                <input type="checkbox" id="disponibilidad" v-model="libro.disponibilidad" required>
            </div>
            <button type="submit">Guardar</button>
        </form>
    </main>
</template>
<style>
    .nuevo-libro {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }
    input{
        padding: 10px;
        border-radius: 5px;

        margin: 10px;
    }
    button{
        background-color: #007bff;
        color: white;
        border: none;
        padding: 10px;
        border-radius: 5px;
        cursor: pointer;
    }
</style>