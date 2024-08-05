<template>
  <Header  main-content="banner"/>
  <main>
    <section>
      <div class="row">
        <div class="col-12 mb-4">
          <div class="card">
            <div class="card-header">
              배너 추가
            </div>
            <div class="card-body">
              <form class="mb-4" action="#" method="post" enctype="multipart/form-data">
                <div class="mb-3">
                  <label for="bannerTitle" class="form-label">배너 제목</label>
                  <input type="text" class="form-control" id="bannerTitle" name="bannerTitle" placeholder="배너 제목 입력">
                </div>
                <div class="mb-3">
                  <label for="bannerImage" class="form-label">배너 이미지</label>
                  <input class="form-control" type="file" id="bannerImage" name="bannerImage" accept="image/*" onchange="previewImage(event)">
                  <img id="imagePreview" class="image-preview" src="#" alt="Image Preview" style="display: none; width: 100%; height: 255px">
                </div>
                <div class="d-flex justify-content-end">
                  <button type="submit" class="btn btn-primary">추가 하기</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: 'BannerAdd',
  components: {Header},

}
</script>

<style scoped>

</style>