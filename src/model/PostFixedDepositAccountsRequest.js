

import ApiClient from '../ApiClient';

/**
 * The PostFixedDepositAccountsRequest model module.
 * @module model/PostFixedDepositAccountsRequest
 * @version 1.0
 */
class PostFixedDepositAccountsRequest {
    /**
     * Constructs a new <code>PostFixedDepositAccountsRequest</code>.
     * PostFixedDepositAccountsRequest
     * @alias module:model/PostFixedDepositAccountsRequest
     */
    constructor() { 
        
        PostFixedDepositAccountsRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostFixedDepositAccountsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostFixedDepositAccountsRequest} obj Optional instance to populate.
     * @return {module:model/PostFixedDepositAccountsRequest} The populated <code>PostFixedDepositAccountsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostFixedDepositAccountsRequest();

            if (data.hasOwnProperty('clientId')) {
                obj['clientId'] = ApiClient.convertToType(data['clientId'], 'Number');
            }
            if (data.hasOwnProperty('productId')) {
                obj['productId'] = ApiClient.convertToType(data['productId'], 'Number');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('dateFormat')) {
                obj['dateFormat'] = ApiClient.convertToType(data['dateFormat'], 'String');
            }
            if (data.hasOwnProperty('submittedOnDate')) {
                obj['submittedOnDate'] = ApiClient.convertToType(data['submittedOnDate'], 'String');
            }
            if (data.hasOwnProperty('depositAmount')) {
                obj['depositAmount'] = ApiClient.convertToType(data['depositAmount'], 'Number');
            }
            if (data.hasOwnProperty('depositPeriod')) {
                obj['depositPeriod'] = ApiClient.convertToType(data['depositPeriod'], 'Number');
            }
            if (data.hasOwnProperty('depositPeriodFrequencyId')) {
                obj['depositPeriodFrequencyId'] = ApiClient.convertToType(data['depositPeriodFrequencyId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} clientId
 */
PostFixedDepositAccountsRequest.prototype['clientId'] = undefined;

/**
 * @member {Number} productId
 */
PostFixedDepositAccountsRequest.prototype['productId'] = undefined;

/**
 * @member {String} locale
 */
PostFixedDepositAccountsRequest.prototype['locale'] = undefined;

/**
 * @member {String} dateFormat
 */
PostFixedDepositAccountsRequest.prototype['dateFormat'] = undefined;

/**
 * @member {String} submittedOnDate
 */
PostFixedDepositAccountsRequest.prototype['submittedOnDate'] = undefined;

/**
 * @member {Number} depositAmount
 */
PostFixedDepositAccountsRequest.prototype['depositAmount'] = undefined;

/**
 * @member {Number} depositPeriod
 */
PostFixedDepositAccountsRequest.prototype['depositPeriod'] = undefined;

/**
 * @member {Number} depositPeriodFrequencyId
 */
PostFixedDepositAccountsRequest.prototype['depositPeriodFrequencyId'] = undefined;






export default PostFixedDepositAccountsRequest;

