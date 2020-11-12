

import ApiClient from '../ApiClient';
import GetCentersOfficeOptions from './GetCentersOfficeOptions';
import GetCentersStaffOptions from './GetCentersStaffOptions';

/**
 * The GetCentersTemplateResponse model module.
 * @module model/GetCentersTemplateResponse
 * @version 1.0
 */
class GetCentersTemplateResponse {
    /**
     * Constructs a new <code>GetCentersTemplateResponse</code>.
     * GetCentersTemplateResponse
     * @alias module:model/GetCentersTemplateResponse
     */
    constructor() { 
        
        GetCentersTemplateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetCentersTemplateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetCentersTemplateResponse} obj Optional instance to populate.
     * @return {module:model/GetCentersTemplateResponse} The populated <code>GetCentersTemplateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetCentersTemplateResponse();

            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('activationDate')) {
                obj['activationDate'] = ApiClient.convertToType(data['activationDate'], 'Date');
            }
            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('officeOptions')) {
                obj['officeOptions'] = ApiClient.convertToType(data['officeOptions'], [GetCentersOfficeOptions]);
            }
            if (data.hasOwnProperty('staffOptions')) {
                obj['staffOptions'] = ApiClient.convertToType(data['staffOptions'], [GetCentersStaffOptions]);
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} active
 */
GetCentersTemplateResponse.prototype['active'] = undefined;

/**
 * @member {Date} activationDate
 */
GetCentersTemplateResponse.prototype['activationDate'] = undefined;

/**
 * @member {Number} officeId
 */
GetCentersTemplateResponse.prototype['officeId'] = undefined;

/**
 * @member {Array.<module:model/GetCentersOfficeOptions>} officeOptions
 */
GetCentersTemplateResponse.prototype['officeOptions'] = undefined;

/**
 * @member {Array.<module:model/GetCentersStaffOptions>} staffOptions
 */
GetCentersTemplateResponse.prototype['staffOptions'] = undefined;






export default GetCentersTemplateResponse;

