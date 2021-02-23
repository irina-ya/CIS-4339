<template>
    <div id="faq">
    <article class="message">
        <div class="message-header">
            How do I sign up for a policy?       
        </div>
        <div class="message-body">
            <div class="message-content">
            Simply click the "Add Policies" button on the navigation bar after logging in. It will take you to a drop down menu where you can select the best plan for you.
            </div>
        </div>
    </article>
    

    <article class="message">
        <div class="message-header">
            Can I see my current policies?        
        </div>
        <div class="message-body">
            <div class="message-content">
            Yes! They will be listed when you click your profile.
            </div>
        </div>
    </article>

    <article class="message">
        <div class="message-header">
        How can I delete my account?  
        </div>
        <div class="message-body">
            <div class="message-content">
            We are sorry to see you go. You can delete your account when you are viewing you profile.
            </div>
        </div>
    </article>

        <article class="message">
        <div class="message-header">
        Are you going to be adding more features? 
        </div>
        <div class="message-body">
            <div class="message-content">
            Yes. The site itself is still under development. Currently, statements, payments, and other missing features will be done via mail or phone.
            </div>
        </div>
    </article>

</div>
</template>

<script>
export default {
    name: 'FAQ',

}
</script>

<style scoped>

.message {
    border: 2px rgb(48, 47, 47);
    border-radius: 5px;
    max-width: 50%;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
}

.message-header {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: auto;
  text-align: left;
  border: none;
  outline: none;
  transition: 0.4s;
}

.message-body   {
    padding: 0;
    max-height: 10em;
    overflow: hidden;
    transition: 0.3s ease all;
}


.message-content {
    padding: 30px;
}
</style>