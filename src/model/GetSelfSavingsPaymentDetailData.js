

import ApiClient from '../ApiClient';
import GetSelfSavingsPaymentType from './GetSelfSavingsPaymentType';

/**
 * The GetSelfSavingsPaymentDetailData model module.
 * @module model/GetSelfSavingsPaymentDetailData
 * @version 1.0
 */
class GetSelfSavingsPaymentDetailData {
    /**
     * Constructs a new <code>GetSelfSavingsPaymentDetailData</code>.
     * @alias module:model/GetSelfSavingsPaymentDetailData
     */
    constructor() { 
        
        GetSelfSavingsPaymentDetailData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSelfSavingsPaymentDetailData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSelfSavingsPaymentDetailData} obj Optional instance to populate.
     * @return {module:model/GetSelfSavingsPaymentDetailData} The populated <code>GetSelfSavingsPaymentDetailData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSelfSavingsPaymentDetailData();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('paymentType')) {
                obj['paymentType'] = GetSelfSavingsPaymentType.constructFromObject(data['paymentType']);
            }
            if (data.hasOwnProperty('accountNumber')) {
                obj['accountNumber'] = ApiClient.convertToType(data['accountNumber'], 'Number');
            }
            if (data.hasOwnProperty('checkNumber')) {
                obj['checkNumber'] = ApiClient.convertToType(data['checkNumber'], 'Number');
            }
            if (data.hasOwnProperty('routingCode')) {
                obj['routingCode'] = ApiClient.convertToType(data['routingCode'], 'Number');
            }
            if (data.hasOwnProperty('receiptNumber')) {
                obj['receiptNumber'] = ApiClient.convertToType(data['receiptNumber'], 'Number');
            }
            if (data.hasOwnProperty('bankNumber')) {
                obj['bankNumber'] = ApiClient.convertToType(data['bankNumber'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetSelfSavingsPaymentDetailData.prototype['id'] = undefined;

/**
 * @member {module:model/GetSelfSavingsPaymentType} paymentType
 */
GetSelfSavingsPaymentDetailData.prototype['paymentType'] = undefined;

/**
 * @member {Number} accountNumber
 */
GetSelfSavingsPaymentDetailData.prototype['accountNumber'] = undefined;

/**
 * @member {Number} checkNumber
 */
GetSelfSavingsPaymentDetailData.prototype['checkNumber'] = undefined;

/**
 * @member {Number} routingCode
 */
GetSelfSavingsPaymentDetailData.prototype['routingCode'] = undefined;

/**
 * @member {Number} receiptNumber
 */
GetSelfSavingsPaymentDetailData.prototype['receiptNumber'] = undefined;

/**
 * @member {Number} bankNumber
 */
GetSelfSavingsPaymentDetailData.prototype['bankNumber'] = undefined;






export default GetSelfSavingsPaymentDetailData;

