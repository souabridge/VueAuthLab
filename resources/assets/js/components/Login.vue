<template>
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Login</div>

                <div class="panel-body">
                    <form class="form-horizontal" method="POST">
                        <input type="hidden" name="_token" v-model="csrf">

                        <div class="form-group">
                            <label class="col-md-4 control-label" >E-Mail Address</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control" name="email" v-model="email" required autofocus>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-md-4 control-label">Password</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control" name="password" v-model="password" required>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-md-8 col-md-offset-4">
                                <button type="submit" class="btn btn-primary" @click="login">
                                    Login
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        data() {
            return {
                email: '',
                password: '',
                csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            }
        },
        methods: {
            login() {
                console.log('_token=' + this.csrf)
                console.log('email=' + this.email)

                // axios('api/login', {
                //     method: 'POST',
                //     headers: {'X-XSRF-TOKEN': this.csrf, 'Content-Type': 'x-www-form-urlencoded'},
                //     params: {
                //         _token: this.csrf,
                //         email: this.email,
                //         password: this.password
                //     }
                // }).then(response => {
                //     console.log(response)
                // })
            },
        },
    }
</script>
