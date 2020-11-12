

import ApiClient from '../ApiClient';
import GetRecurringPaymentType from './GetRecurringPaymentType';

/**
 * The GetRecurringPaymentDetailData model module.
 * @module model/GetRecurringPaymentDetailData
 * @version 1.0
 */
class GetRecurringPaymentDetailData {
    /**
     * Constructs a new <code>GetRecurringPaymentDetailData</code>.
     * @alias module:model/GetRecurringPaymentDetailData
     */
    constructor() { 
        
        GetRecurringPaymentDetailData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRecurringPaymentDetailData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRecurringPaymentDetailData} obj Optional instance to populate.
     * @return {module:model/GetRecurringPaymentDetailData} The populated <code>GetRecurringPaymentDetailData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecurringPaymentDetailData();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('paymentType')) {
                obj['paymentType'] = GetRecurringPaymentType.constructFromObject(data['paymentType']);
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
GetRecurringPaymentDetailData.prototype['id'] = undefined;

/**
 * @member {module:model/GetRecurringPaymentType} paymentType
 */
GetRecurringPaymentDetailData.prototype['paymentType'] = undefined;

/**
 * @member {Number} accountNumber
 */
GetRecurringPaymentDetailData.prototype['accountNumber'] = undefined;

/**
 * @member {Number} checkNumber
 */
GetRecurringPaymentDetailData.prototype['checkNumber'] = undefined;

/**
 * @member {Number} routingCode
 */
GetRecurringPaymentDetailData.prototype['routingCode'] = undefined;

/**
 * @member {Number} receiptNumber
 */
GetRecurringPaymentDetailData.prototype['receiptNumber'] = undefined;

/**
 * @member {Number} bankNumber
 */
GetRecurringPaymentDetailData.prototype['bankNumber'] = undefined;






export default GetRecurringPaymentDetailData;

