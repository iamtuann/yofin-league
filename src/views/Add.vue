<template>
  <div class="container-fluid">
    <div class="row">
      <main role="main" class="col-md-12 ml-sm-auto col-lg-12 pt-3 px-4">
        <div class="container">
          <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mt-3 ">
            <h4 class="mb-3">New row</h4>
            <div class="btn-toolbar mb-2 mb-md-0">
              <router-link to="/" class="btn btn-sm mr-1 btn-outline-secondary">
                Back
              </router-link>
              <a
                href="https://docs.google.com/spreadsheets/d/1oLGI1u68sPh-P1yhWaU7j_WUTHjFMY1aUu6uINfTb0Q/edit?usp=sharing"
                class="btn btn-sm btn-outline-secondary"
                target="_blank"
              >
                View Google Sheet
              </a>
            </div>
          </div>
          <div v-if="showMsg" class="alert alert-success alert-dismissible fade show" role="alert">
            {{ message }}
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="col-md-12 order-md-1">
            <form @submit.prevent="addRow">
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="name">Name</label>
                  <input type="text" v-model="name" class="form-control" id="name" placeholder="First &amp; Last Name" required />
                </div>
                <div class="col-md-6 mb-3">
                  <label for="phone">Phone</label>
                  <input type="text" v-model="phone" class="form-control" id="phone" required />
                </div>
                <div class="col-md-6 mb-3">
                  <label for="address">Address</label>
                  <input type="text" v-model="address" class="form-control" id="address" placeholder="1234 Main St" required />
                </div>
                <div class="col-md-4 mb-3">
                  <label for="city">City</label>
                  <input type="text" v-model="city" class="form-control" id="city" placeholder="ex: Algiers" required />
                </div>
                <div class="col-md-2 mb-3">
                  <label for="zip">Zip</label>
                  <input type="text" v-model="zip" class="form-control" id="zip" placeholder="ex: 16000" required />
                </div>
                <div class="col-md-6 mb-3">
                  <label for="activity">Activity</label>
                  <select v-model="activity" class="custom-select d-block w-100" id="activity" required>
                    <option value="">Choose...</option>
                    <option value="Painter">Painter</option>
                    <option value="Plumber">Plumber</option>
                  </select>
                </div>
                <div class="col-md-6">
                  <label for="">.</label>
                  <button class="btn btn-primary btn-block" type="submit">SUBMIT</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

const GOOGLE_SERVICE_ACCOUNT_EMAIL = "yofinleague@yofin-league-416302.iam.gserviceaccount.com";
const GOOGLE_PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCk8KX/Au00nvUJ\nlZjdE/7rxkXqnmSroxNtCEwKzkAq8yPgy/EoQ/Yfr8nP3ddTsYoU2XJ48ZzFzy0n\nTd4AfZtn1Mp1YHtIjGMOWVm+GJHoqfv+QNEu4fKlLvpqFJq9kvOAfEDS8dDAG7D6\nsWrYaqp965f5t1BicHJpLhmwTkLE5sLUMHK9COgCW6G0hVck+YqvWJE4ZsBbtTkl\nbgx2bCd/+VVNKV6h0f9I72VN5x1WzeIHNQ9+aEtsGOq5imtwPigpqd9N7sZ2ojSw\np17vX0Gtdo0ldfOzwjQql5AtK6jDXrH70ixrJFxDdzQ9lqxIgXFKcdiQtvoInLbP\n2+utq46xAgMBAAECggEAAilZReKJFE6QD84HxBUYcF4vjCstxC95pZe1WOfSQL8s\nLBc6HToo8XTSG7eeBDhporDakos5NUEBZ/WPQawDuiBYaUyVqFohdxvnRzHUMYOO\n7t/KNKpEqKLj6IQwfAhkaT2KSIVqHsa3dW1B/7fuopewkjwuHnsiebPEpbTchG8W\nbzLc+GWk3k7V4wOIg7i1eI8ZzlhAtdaVmnCpKfPDSgP8rLDao4rdGY6SDRgv9TLG\nDiy762qcxwS05ImzL6z7zpT8Vk1W3XZ2LaW1iaSjttOxl3pddOXM9c/NpCZxG9Tm\ntfqXhIXtosooIQozUbbKJD3CcFykXdDSXJQigIZmYQKBgQDZ4Mw0Ne+fFOlEQjY6\n1I6GHOH1dnDA4ZwDx44F9NTnlotEm2xlzp0qY58SEkRNMeCiKXcid/6CdszLfhJT\nuwmhRcTZU4s5zj5IPL65x5HlHU1AMbzP/vfsA34aee7S4nKgYul0glUvAyjm4CSe\nHyf9GXslvvoRbyvXx3LmOWttkQKBgQDBzKWQkAtKHyhfcPqnniEmiNdvWuKZxsBr\nUQqZm6zf9ioqjHVRYhTNav9tt+Xjb1tl8qHlzTeoSvRHjFF4EMMKlL5w5M6LaBCS\nEtVFcBTXiKsvR640cBnkBFIG0z/Wn3x78fq/HaPUCCNBTYZRB5EMzQiahwv/RYiW\n7eIIbj//IQKBgQCjwix5iZiC7wqsvT9ZVG2TK55CCjWRI4FJ7fE3VN+4+RPQCymc\nE4FZXOswf/5KLxTxjUz34Uyv7m7a+/T2bfw89N2RoxNf7T4uuUl5BSEJHc70Uu3h\nP3hEMhPT/pWcd4tENVPWuCciYLObZBjhp/U8bKx8oGAAPpirZENd+wZdoQKBgQCs\no241umukKt9fLhjL6oyjdDFd7DuCO1A8CWSE8+3rULG9V4RG7DWVzCQgjDqJATEN\nPzhDqy1SiPrVJcWJTH1C1sBTdzAbdaeVSJueELswSXodUyB3bAlUWxjrJZJv0YEm\nNKhnSbMgdeNaEAJ/+lqXaaqpZXYlf76unNjHI9d0oQKBgQCMVeJgDHlFHpMNM6wa\n+DVMa03WDPIkROj5u9TFwYeIGOquspZ7S62+ynarwNwkjbM95S3vPd/x2QEo0qy4\nfac4cYRAFQcuh/7k8qmmoZgWxrumD3qAqZeBZJShLKarC9kkA3aYTuH3COU3rgpJ\n/56izH7xIcRyv7RiPGEtUmoquA==\n-----END PRIVATE KEY-----\n";

const serviceAccountAuth = new JWT({
  email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: GOOGLE_PRIVATE_KEY,
  scopes: [
    'https://www.googleapis.com/auth/spreadsheets',
  ],
});

const name = ref('');
const phone = ref('');
const address = ref('');
const city = ref('');
const zip = ref('');
const activity = ref('');
const showMsg = ref(false);
const message = ref('');

const addRow = async () => {
  try {
    const doc = new GoogleSpreadsheet('1ySQInUzPUvEL3q_hqIZccOLbIpEqru2wkPYtapna15I', serviceAccountAuth);
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];

    const newRow = {
      name: name.value,
      phone: phone.value,
      address: address.value,
      city: city.value,
      zip: zip.value,
      activity: activity.value,
    };

    await sheet.addRow(newRow);

    // // Reset fields
    // name.value = '';
    // phone.value = '';
    // address.value = '';
    // city.value = '';
    // zip.value = '';
    // activity.value = '';

    // Display success message
    message.value = 'New row added!';
    showMsg.value = true;
  } catch (error) {
    console.error('Error adding row:', error);
    // Handle error if needed
  }
};
</script>

<style scoped>
/* (CSS styles, if any) */
</style>
