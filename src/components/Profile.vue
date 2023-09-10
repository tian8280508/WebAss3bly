<template>
    <div class="wallet">
        <div v-if="account">
            <el-row>
                <img src="../assets/wonderpal3981.png" alt="Avatar" class="avatar" />
            </el-row>
            <el-row>
                <div class="name-font">{{ name }}</div>
            </el-row>
            <el-row style="display: flex;" align-items="middle">
                <el-col>
                    <img style="margin-right: 4px;" src="../assets/Shape.png" />
                    <label class="address-font">{{ shortenedAddress }}</label>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="8" class="col-content">
                    <div class="content-center">
                        <img src="../assets/Vector.png" alt="Icon" class="icon" />
                        <br />Dashboard
                    </div>
                </el-col>
                <el-col :span="8" class="col-content">
                    <div class="content-center">
                        <img src="../assets/Vector.png" alt="Icon" class="icon" />
                        <br />My nodes
                    </div>
                </el-col>
                <el-col :span="8" class="col-content">
                    <div class="content-center">
                        <img src="../assets/Vector.png" alt="Icon" class="icon" />
                        <br />Log
                    </div>
                </el-col>
            </el-row>
        </div>
        <div v-else>
            <el-button style="font-size: large;" type="primary" @click="connectWallet">Connect Wallet</el-button>
        </div>
    </div>
</template>
  
<script>
import { ethers } from "ethers";

export default {
    data() {
        return {
            name: null,
            account: null,
            balance: null,
        };
    },
    computed: {
        shortenedAddress() {
        if (this.account) {
            this.name = "tian.eth"
            return `${this.account.substring(0, 8)}...${this.account.substring(this.account.length - 4)}`;
        }
        return '';
        },
    },
    methods: {
        async connectWallet() {
        if (typeof window.ethereum !== "undefined") {
            try {
            // 请求用户账户地址
            const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
            this.account = accounts[0];

            // 创建一个 ethers provider
            const provider = new ethers.providers.Web3Provider(window.ethereum);

            // 获取用户的 ETH 余额
            const balanceWei = await provider.getBalance(this.account);
            this.balance = ethers.utils.formatEther(balanceWei);
            } catch (error) {
            console.error(error);
            }
        } else {
            alert("Please install a Web3 provider, such as MetaMask.");
        }
        },
    },
};
</script>
  
<style>
.wallet {
    padding: 10px;
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
    border: 1px solid #FFF;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0);
}
.el-row {
    margin: 10px;
}
.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.icon {
  width: 20px;
  height: 20px;
  margin-right: 50%;
}
.info-line {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.address-font {
    color: #5D5D5B;
    font: inter;
    font-weight: 700;
    font-size: 1rem;
}
.name-font {
    font: inter;
    font-weight: 800;
    font-size: 2rem;
    align-items: center;
}
.col-content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.content-center {
  text-align: center;
}
</style>
  