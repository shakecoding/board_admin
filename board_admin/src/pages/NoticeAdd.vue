<template>
  <Header  main-content="notice"/>
  <main>
    <section>
      <div class="row">
        <div class="col-12 mb-4">
          <div class="card">
            <div class="card-header">
              공지사항 추가
            </div>
            <div class="card-body">
              <form action="#" method="post">
                <div class="mb-3 d-flex">
                  <input type="text" name="noticeTitle" class="form-control me-2" placeholder="공지사항 제목">
                </div>
                <div class="mb-3">
                  <textarea class="form-control" name="noticeContent" placeholder="공지사항 내용" rows="6"></textarea>
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
  name: 'NoticeAdd',
  components: {Header},

}
</script>

<style scoped>

</style>