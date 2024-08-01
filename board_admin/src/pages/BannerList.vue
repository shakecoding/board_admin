<template>
  <Header  main-content="notice"/>
  <main>
    <section>
      <div class="row mb-4">
        <div class="col">
          <h1 class="page-heading text-dark fw-bold fs-3">배너 관리</h1>
        </div>
      </div>
      <div class="row mb-4">
        <div class="col d-flex justify-content-end gap-3">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="selectAll">
            <label class="form-check-label" for="selectAll">
              전체 선택
            </label>
          </div>
          <a href="/admin/banner/add" class="btn btn-primary">배너 추가</a>
          <button id="deleteBannerBtn" class="btn btn-danger">삭제</button>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <div class="d-flex flex-wrap justify-content-center">
                <!-- Example of a banner card -->
                <div class="card-inter">
                  <div class="card-head">
                    <header>
                      <input class="form-check-input" type="checkbox" name="checkedValue" style="width: 13px;margin-right: 8px;">메인 배너
                    </header>
                  </div>
                  <div style="width: 100%;">
                    <img src="https://getbootstrap.kr/docs/5.3/assets/brand/bootstrap-logo-shadow.png" alt="Banner" style="width: 100%; height: 132px; object-fit: cover;">
                  </div>
                  <div>
                    <a href="/admin/banner/modify/1" style="cursor: pointer; align-content: end">
                      <img style="width: 20%; float: right; margin-right: 4px;"
                           src="https://getbootstrap.kr/docs/5.3/assets/brand/bootstrap-logo-shadow.png">
                    </a>
                  </div>
                </div>
                <div class="card-inter">
                  <div class="card-head">
                    <header>
                      <input class="form-check-input" type="checkbox" name="checkedValue" style="width: 13px;margin-right: 8px;">메인 배너
                    </header>
                  </div>
                  <div style="width: 100%;">
                    <img src="https://getbootstrap.kr/docs/5.3/assets/brand/bootstrap-logo-shadow.png" alt="Banner" style="width: 100%; height: 132px; object-fit: cover;">
                  </div>
                  <div>
                    <a href="/admin/banner/modify/1" style="cursor: pointer; align-content: end">
                      <img style="width: 20%; float: right; margin-right: 4px;"
                           src="https://getbootstrap.kr/docs/5.3/assets/brand/bootstrap-logo-shadow.png">
                    </a>
                  </div>
                </div>
                <div class="card-inter">
                  <div class="card-head">
                    <header>
                      <input class="form-check-input" type="checkbox" name="checkedValue" style="width: 13px;margin-right: 8px;">메인 배너
                    </header>
                  </div>
                  <div style="width: 100%;">
                    <img src="https://getbootstrap.kr/docs/5.3/assets/brand/bootstrap-logo-shadow.png" alt="Banner" style="width: 100%; height: 132px; object-fit: cover;">
                  </div>
                  <div>
                    <a href="/admin/banner/modify/1" style="cursor: pointer; align-content: end">
                      <img style="width: 20%; float: right; margin-right: 4px;"
                           src="https://getbootstrap.kr/docs/5.3/assets/brand/bootstrap-logo-shadow.png">
                    </a>
                  </div>
                </div>
                <div class="card-inter">
                  <div class="card-head">
                    <header>
                      <input class="form-check-input" type="checkbox" name="checkedValue" style="width: 13px;margin-right: 8px;">메인 배너
                    </header>
                  </div>
                  <div style="width: 100%;">
                    <img src="https://getbootstrap.kr/docs/5.3/assets/brand/bootstrap-logo-shadow.png" alt="Banner" style="width: 100%; height: 132px; object-fit: cover;">
                  </div>
                  <div>
                    <a href="/admin/banner/modify/1" style="cursor: pointer; align-content: end">
                      <img style="width: 20%; float: right; margin-right: 4px;"
                           src="https://getbootstrap.kr/docs/5.3/assets/brand/bootstrap-logo-shadow.png">
                    </a>
                  </div>
                </div>
                <div class="card-inter">
                  <div class="card-head">
                    <header>
                      <input class="form-check-input" type="checkbox" name="checkedValue" style="width: 13px;margin-right: 8px;">메인 배너
                    </header>
                  </div>
                  <div style="width: 100%;">
                    <img src="https://getbootstrap.kr/docs/5.3/assets/brand/bootstrap-logo-shadow.png" alt="Banner" style="width: 100%; height: 132px; object-fit: cover;">
                  </div>
                  <div>
                    <a href="/admin/banner/modify/1" style="cursor: pointer; align-content: end">
                      <img style="width: 20%; float: right; margin-right: 4px;"
                           src="https://getbootstrap.kr/docs/5.3/assets/brand/bootstrap-logo-shadow.png">
                    </a>
                  </div>
                </div>
                <div class="card-inter">
                  <div class="card-head">
                    <header>
                      <input class="form-check-input" type="checkbox" name="checkedValue" style="width: 13px;margin-right: 8px;">메인 배너
                    </header>
                  </div>
                  <div style="width: 100%;">
                    <img src="https://getbootstrap.kr/docs/5.3/assets/brand/bootstrap-logo-shadow.png" alt="Banner" style="width: 100%; height: 132px; object-fit: cover;">
                  </div>
                  <div>
                    <a href="/admin/banner/modify/1" style="cursor: pointer; align-content: end">
                      <img style="width: 20%; float: right; margin-right: 4px;"
                           src="https://getbootstrap.kr/docs/5.3/assets/brand/bootstrap-logo-shadow.png">
                    </a>
                  </div>
                </div>
                <div class="card-inter">
                  <div class="card-head">
                    <header>
                      <input class="form-check-input" type="checkbox" name="checkedValue" style="width: 13px;margin-right: 8px;">메인 배너
                    </header>
                  </div>
                  <div style="width: 100%;">
                    <img src="https://getbootstrap.kr/docs/5.3/assets/brand/bootstrap-logo-shadow.png" alt="Banner" style="width: 100%; height: 132px; object-fit: cover;">
                  </div>
                  <div>
                    <a href="/admin/banner/modify/1" style="cursor: pointer; align-content: end">
                      <img style="width: 20%; float: right; margin-right: 4px;"
                           src="https://getbootstrap.kr/docs/5.3/assets/brand/bootstrap-logo-shadow.png">
                    </a>
                  </div>
                </div>
                <!-- Add more banner cards as needed -->
              </div>
            </div>
            <nav>
              <ul class="pagination justify-content-center">
                <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">Next</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Header from "@/components/Header.vue";


export default {
  name: 'BannerList',
  components: {Header},

}

</script>

<style scoped>

</style>