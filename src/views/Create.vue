<template>
  <div>
    <v-card>
      <v-card-text>
        <v-form ref="form" v-model="valid">
          <v-text-field v-model="createReq.name" label="企业昵称" required :rules="[ v => !!v || '请填写企业昵称', ]" class="mb-3"></v-text-field>
          <v-text-field v-model.number="createReq.price" label="大头菜价格" required type="number" prefix="$" :rules="[ v => !!v || '请填写大头菜价格', ]" class="mb-3"></v-text-field>
          <v-text-field v-model="createReq.loc" label="工位描述" required hint="如:2号楼8楼电梯出门左手边"  :rules="[ v => !!v || '爸爸在哪?', ]" class="mb-3"></v-text-field>

          <v-btn class="primary" @click="submit">创建</v-btn>
        </v-form>
      </v-card-text>

    </v-card>
  </div>
</template>

<script>
import { createPost } from "@/apis/animal";

export default {
  data() {
    return {
      valid: true,
      createReq: {
        name: '',
        price: '',
        loc: ''
      },
      test: ''
    }
  },
  methods: {
    async submit() {
      if(this.$refs.form.validate()) {
        await createPost({
          ...this.createReq
        })

        this.$message.success('添加成功')
        this.$refs.form.reset()
        this.$route.push('/')
      }
    },

  }
}
</script>
