<template>
  <div class="min-h-screen">
    <div class="mx-2 md:mx-10 my-2 bg-white p-4">
    <div class="border-b border-green-200">
        <div class="flex justify-center bg-orange-600 text-white p-2 font-bold text-2xl">PRIVACY POLICY</div>

        <div class="mt-4"> 
            <p><b>JUBILANT AFRO FARMS</b> respect your privacy regarding any information we may collect while operating our website. This Privacy Policy applies to <a href="http://www.jubilantafrofarms.com/" target="_blank">www.jubilantafrofarms.com</a> hereinafter, &ldquo;us&rdquo;, &ldquo;our&rdquo; &ldquo;we&rdquo;, or &ldquo;https://jubilantafrofarms.com//. We respect your privacy and we are committed to protecting the personally identifiable information you may provide us through the Website. We have adopted this privacy policy (&ldquo;Privacy Policy&rdquo;) to explain what information may be collected on our Website, how we use this information, and under what circumstances we may disclose the information to third parties. This Privacy Policy applies only to information we collect through the Website and does not apply to our collection of information from other sources.</p>
<p><br></p>
<p>This Privacy Policy, together with the Terms and conditions posted on our Website, set forth the general rules and policies governing your use of our Website. Depending on your activities when visiting our Website, you may be required to agree to additional terms and conditions.</p>
<p>&nbsp;</p>
<p><strong>Website Visitors</strong></p>
<p>We collects non-personally-identifying information of the sort that web browsers and servers typically make available, such as the browser type, language preference, referring site, and the date and time of each visitor request. Our purpose in collecting non-personally identifying information is to better understand how visitors use its website. From time to time, we may release non-personally-identifying information in the aggregate, e.g., by publishing a report on trends in the usage of our website.</p>
<p><br></p>
<p>We also collects potentially personally-identifying information like Internet Protocol (IP) addresses for logged-in users and users leaving comments on https://jubilantafrofarms.com/ blog posts. We only discloses logged in user and commenter IP addresses under the same circumstances that it uses and discloses personally-identifying information as described below.</p>
<p><br></p>
<p><strong>Gathering of Personally-Identifying Information</strong></p>
<p>Certain visitors to our websites choose to interact with us in ways that require us to gather personally-identifying information. The amount and type of information that we gathers depends on the nature of the interaction. For example, we ask visitors who sign up to register at https://jubilantafrofarms.com/ to provide a username and email address.</p>
<p><br></p>
<p><strong>Security</strong></p>
<p>The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.</p>
<p><br></p>
<p><strong>Links To External Sites</strong></p>
<p>Our Service may contain links to external sites that are not operated by us. If you click on a third-party link, you will be directed to that third-party&rsquo;s site. We strongly advise you to review the Privacy Policy and terms and conditions of every site you visit.</p>
<p><br></p>
<p>We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites, products, or services.</p>
<p>&nbsp;</p>
<p><strong>Aggregated Statistics</strong></p>
<p>We may collect statistics about the behavior of visitors to its website. We may display this information publicly or provide it to others. However, we does not disclose your personally-identifying information.</p>
<p><br></p>
<p><strong>Cookies</strong></p>
<p>To enrich and perfect your online experience, we uses &ldquo;Cookies&rdquo;, similar technologies and services provided by others to display personalized content, appropriate advertising, and store your preferences on your computer.</p>
<p><br></p>
<p>A cookie is a string of information that a website stores on a visitor&rsquo;s computer, and that the visitor&rsquo;s browser provides to the website each time the visitor returns. We uses cookies to help us identify and track visitors, their usage of https://jubilantafrofarms.com/, and their website access preferences. Our visitors who do not wish to have cookies placed on their computers should set their browsers to refuse cookies before using our websites, with the drawback that certain features of our websites may not function properly without the aid of cookies.</p>
<p><br></p>
<p>By continuing to navigate our website without changing your cookie settings, you hereby acknowledge and agree to our use of cookies.</p>
<p><br></p>
<p><strong>Privacy Policy Changes</strong></p>
<p>Although most changes are likely to be minor, We may change its Privacy Policy from time to time, and at our sole discretion. We encourage visitors to frequently check this page for any changes to its Privacy Policy. Your continued use of this site after any change in this Privacy Policy will constitute your acceptance of such change.</p>
<p><br></p>

<p>&ldquo;<em><strong>Together, we unlock the hidden potential of the African Farmlands&rdquo;</strong></em></p>
        </div>
    </div>


    </div>
  </div>
</template>
  
  <script>
import { http } from "~/common/index.js";
export default {
  data() {
    return {
      dataItem: {},
      loader: false,
      successMsg: false,
      emailError: false,
      formError: false
    };
  },
  methods: {
    async sendEmail() {
      const details = this.dataItem;
      if (
        this.dataItem.name == undefined ||
        this.dataItem.phone == undefined ||
        this.dataItem.message == undefined
      ) {
        this.formError = true;
      } else {
        this.formError = false;
        try {
          const url = `/api/emails`;
          const details = this.dataItem;
          const self = this;
          this.loader = true;
          await http.post(url, details).then(res => {
            if (res.data.state) {
              self.successMsg = true;
              self.loader = false;
              self.dataItem = {};
            } else {
              self.emailError = true;
              self.loader = false;
            }
          });
        } catch (err) {
          console.log("error occured", err);
        }
      }
    }
  }
};
</script>
  
  <style lang="scss" scoped>
</style>