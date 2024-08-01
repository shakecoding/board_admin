<template>
  <Header main-content="main" />
  <main id="content">
    <section class="section-body">
      <div class="row">
        <div class="col-12 mb-4">
          <div class="card">
            <div class="card-header">
              Members
            </div>
            <div class="card-body">
              <table class="table table-striped table-hover">
                <thead class="table-dark">
                <tr>
                  <th>Name</th>
                  <th>Contact</th>
                  <th>Registered Date</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>John Doe</td>
                  <td>010-1234-5678</td>
                  <td>2023-01-01</td>
                </tr>
                <tr>
                  <td>Jane Smith</td>
                  <td>010-8765-4321</td>
                  <td>2023-02-01</td>
                </tr>
                <tr>
                  <td>Michael Johnson</td>
                  <td>010-1111-2222</td>
                  <td>2023-03-01</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="col-12 mb-4">
          <div class="card">
            <div class="card-header">
              Programs
            </div>
            <div class="card-body">
              <table class="table table-striped table-hover">
                <thead class="table-dark">
                <tr>
                  <th>Program</th>
                  <th>Participants</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>Yoga Class</td>
                  <td>20</td>
                </tr>
                <tr>
                  <td>Cooking Workshop</td>
                  <td>15</td>
                </tr>
                <tr>
                  <td>Art Therapy</td>
                  <td>10</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="col-12 mb-4">
          <div class="card">
            <div class="card-header">
              Today's Pickups
            </div>
            <div class="card-body">
              <table class="table table-striped table-hover">
                <thead class="table-dark">
                <tr>
                  <th>ID</th>
                  <th>Date</th>
                  <th>Applicant</th>
                  <th>Picker</th>
                  <th>Status</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>1001</td>
                  <td>2023-07-01</td>
                  <td>John Doe</td>
                  <td>Paul Walker</td>
                  <td>Completed</td>
                </tr>
                <tr>
                  <td>1002</td>
                  <td>2023-07-02</td>
                  <td>Jane Smith</td>
                  <td>Chris Evans</td>
                  <td>Pending</td>
                </tr>
                <tr>
                  <td>1003</td>
                  <td>2023-07-03</td>
                  <td>Michael Johnson</td>
                  <td>David Beckham</td>
                  <td>In Progress</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <!-- <div class="col-12 mb-4">
            <div class="card">
                <div class="card-header">
                    Today's Orders
                </div>
                <div class="card-body">
                    <table class="table table-striped table-hover">
                        <thead class="table-dark">
                        <tr>
                            <th>Date</th>
                            <th>Order ID</th>
                            <th>Member</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>2023-07-01</td>
                            <td>5001</td>
                            <td>John Doe</td>
                        </tr>
                        <tr>
                            <td>2023-07-02</td>
                            <td>5002</td>
                            <td>Jane Smith</td>
                        </tr>
                        <tr>
                            <td>2023-07-03</td>
                            <td>5003</td>
                            <td>Michael Johnson</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div> -->
      </div>
    </section>
  </main>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name : 'Main',
  components : {Header}
}
</script>

<style scoped>

</style>