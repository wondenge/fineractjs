

import ApiClient from '../ApiClient';
import StaffData from './StaffData';

/**
 * The GetTellersTellerIdCashiersTemplateResponse model module.
 * @module model/GetTellersTellerIdCashiersTemplateResponse
 * @version 1.0
 */
class GetTellersTellerIdCashiersTemplateResponse {
    /**
     * Constructs a new <code>GetTellersTellerIdCashiersTemplateResponse</code>.
     * GetTellersTellerIdCashiersTemplateResponse
     * @alias module:model/GetTellersTellerIdCashiersTemplateResponse
     */
    constructor() { 
        
        GetTellersTellerIdCashiersTemplateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetTellersTellerIdCashiersTemplateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTellersTellerIdCashiersTemplateResponse} obj Optional instance to populate.
     * @return {module:model/GetTellersTellerIdCashiersTemplateResponse} The populated <code>GetTellersTellerIdCashiersTemplateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetTellersTellerIdCashiersTemplateResponse();

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
            if (data.hasOwnProperty('staffOptions')) {
                obj['staffOptions'] = ApiClient.convertToType(data['staffOptions'], [StaffData]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} tellerId
 */
GetTellersTellerIdCashiersTemplateResponse.prototype['tellerId'] = undefined;

/**
 * @member {String} tellerName
 */
GetTellersTellerIdCashiersTemplateResponse.prototype['tellerName'] = undefined;

/**
 * @member {Number} officeId
 */
GetTellersTellerIdCashiersTemplateResponse.prototype['officeId'] = undefined;

/**
 * @member {String} officeName
 */
GetTellersTellerIdCashiersTemplateResponse.prototype['officeName'] = undefined;

/**
 * @member {Array.<module:model/StaffData>} staffOptions
 */
GetTellersTellerIdCashiersTemplateResponse.prototype['staffOptions'] = undefined;






export default GetTellersTellerIdCashiersTemplateResponse;

