<template>
    <div>
        <el-card>
            <el-tooltip class="item" effect="dark" content="double click Node to vote" placement="top-start">
                <div id="container2" style="height: 300px;"></div>
            </el-tooltip>
        </el-card>


        <el-dialog title="Vote $WAG" :visible.sync="showVoteDialog" width="30%">

            <div class="dialog-content">
                <div> <strong>How many $WAG do you want to vote?</strong></div>
                <br/>
                <br/>
                <el-input v-model="voteAmount" placeholder="Enter amount" style="width: 300px;"></el-input>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button @click="submitVote" type="primary">Confirm</el-button>
            </div>
        </el-dialog>

    </div>
</template>

<script>
import { parse, stringify } from 'flatted';
import { visConf } from '@/assets/visConf.js'
import { ownDemoData } from '@/assets/graphData';
import { runXXLayout, treeLayoutConfForm, hubsizeLayoutConfForm } from '@/assets/visLayout'

export default {
    name: 'Graph',
    data() {
        return {
            id: "6",
            showVoteDialog: false,
            voteAmount: ''
        }
    },
    methods: {
        async submitVote() {
            if (!this.voteAmount) {
                this.$message.warning('Please input the amount you want to vote.');
                return;
            }
            if (this.voteAmount <= 0) {
                this.$message.warning('Please input the correct amount you want to vote.');
                return;
            }

            try {
                if (typeof window.ethereum !== "undefined") {
                    const provider = new ethers.providers.Web3Provider(window.ethereum);
                    const signer = provider.getSigner();
                    const contractAddress = "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D";
                    const abi = [{ "inputs": [{ "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "symbol", "type": "string" }, { "internalType": "uint256", "name": "maxNftSupply", "type": "uint256" }, { "internalType": "uint256", "name": "saleStart", "type": "uint256" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "approved", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "operator", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" }], "name": "ApprovalForAll", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [], "name": "BAYC_PROVENANCE", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "MAX_APES", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "REVEAL_TIMESTAMP", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "apePrice", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "approve", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "baseURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "emergencySetStartingIndexBlock", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "flipSaleState", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "getApproved", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "operator", "type": "address" }], "name": "isApprovedForAll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "maxApePurchase", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "numberOfTokens", "type": "uint256" }], "name": "mintApe", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "ownerOf", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "reserveApes", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "bytes", "name": "_data", "type": "bytes" }], "name": "safeTransferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "saleIsActive", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "operator", "type": "address" }, { "internalType": "bool", "name": "approved", "type": "bool" }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "baseURI", "type": "string" }], "name": "setBaseURI", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "provenanceHash", "type": "string" }], "name": "setProvenanceHash", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "revealTimeStamp", "type": "uint256" }], "name": "setRevealTimestamp", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "setStartingIndex", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "startingIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "startingIndexBlock", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "bytes4", "name": "interfaceId", "type": "bytes4" }], "name": "supportsInterface", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "uint256", "name": "index", "type": "uint256" }], "name": "tokenOfOwnerByIndex", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "tokenURI", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "transferFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];
                    const contract = new ethers.Contract(contractAddress, abi, signer);

                    // Assuming the contract function is named "Bfunction"
                    const tx = await contract.mintApe(this.voteAmount, this.voteAmount);
                    console.log('Transaction hash:', tx.hash);
                    await tx.wait();
                    console.log('Transaction completed');
                } else {
                    alert("Please install a Web3 provider, such as MetaMask.");
                }
            } catch (error) {
                console.error('Error sending transaction:', error);
            }

            this.voteAmount = '';
            this.showVoteDialog = false;
        }
    },
    mounted() {
        // read bisgraph from local
        // var visgraph = parse(window.localStorage.getItem('visgraph'))
        //read data  this.$store.state.visGraph
        // console.log(visgraph.getGraphData());
        console.log(this.$store.state.visGraph)
        var that = this
        var secondVisConf = visConf
        secondVisConf.node.onClick = function (event, node) {
        }
        secondVisConf.node.ondblClick = function (event, node) {
            that.showVoteDialog = true
        }

        secondVisConf.node.width = 80
        secondVisConf.node.height = 60
        secondVisConf.node.label.font = '18px 微软雅黑'
        var visgraph2 = new VisGraph(document.getElementById('container2'), secondVisConf);
        var newData = { nodes: [], links: [] }
        var nodesIDList = []
        ownDemoData.links.forEach((item, index) => {
            if (item.source == this.id || item.target == this.id) {
                nodesIDList.push(item.source)
                nodesIDList.push(item.target)
                newData.links.push(item)
            }
        });
        console.log(nodesIDList);
        ownDemoData.nodes.forEach((item2, index2) => {
            if (nodesIDList.includes(item2.id)) {
                newData.nodes.push(item2)
            }
        })

        visgraph2.drawData(newData);
        treeLayoutConfForm.distY = 150
        treeLayoutConfForm.distX = 100
        treeLayoutConfForm.direction = 'UD'
        runXXLayout("Tree", visgraph2.getGraphData(), treeLayoutConfForm);

        visgraph2.setZoom('auto')
    },

}

</script>

