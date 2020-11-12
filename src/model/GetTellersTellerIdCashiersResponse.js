

import ApiClient from '../ApiClient';
import CashierData from './CashierData';

/**
 * The GetTellersTellerIdCashiersResponse model module.
 * @module model/GetTellersTellerIdCashiersResponse
 * @version 1.0
 */
class GetTellersTellerIdCashiersResponse {
    /**
     * Constructs a new <code>GetTellersTellerIdCashiersResponse</code>.
     * GetTellersTellerIdCashiersResponse
     * @alias module:model/GetTellersTellerIdCashiersResponse
     */
    constructor() { 
        
        GetTellersTellerIdCashiersResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetTellersTellerIdCashiersResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTellersTellerIdCashiersResponse} obj Optional instance to populate.
     * @return {module:model/GetTellersTellerIdCashiersResponse} The populated <code>GetTellersTellerIdCashiersResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetTellersTellerIdCashiersResponse();

            if (data.hasOwnProperty('tellerId')) {
                obj['tellerId'] = ApiClient.convertToType(data['tellerId'], 'Number');
            }
            if (data.hasOwnProperty('tellerName')) {
                obj['tellerName'] = ApiClient.convertToType(data['tellerName'], 'String');
            }
            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('officeName')) {
                obj['officeName'] = ApiClient.convertToType(data['officeName'], 'String');
            }
            if (data.hasOwnProperty('cashiers')) {
                obj['cashiers'] = ApiClient.convertToType(data['cashiers'], [CashierData]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} tellerId
 */
GetTellersTellerIdCashiersResponse.prototype['tellerId'] = undefined;

/**
 * @member {String} tellerName
 */
GetTellersTellerIdCashiersResponse.prototype['tellerName'] = undefined;

/**
 * @member {Number} officeId
 */
GetTellersTellerIdCashiersResponse.prototype['officeId'] = undefined;

/**
 * @member {String} officeName
 */
GetTellersTellerIdCashiersResponse.prototype['officeName'] = undefined;

/**
 * @member {Array.<module:model/CashierData>} cashiers
 */
GetTellersTellerIdCashiersResponse.prototype['cashiers'] = undefined;






export default GetTellersTellerIdCashiersResponse;

