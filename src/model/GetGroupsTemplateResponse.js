

import ApiClient from '../ApiClient';
import GetGroupsTemplateClientOptions from './GetGroupsTemplateClientOptions';
import GetGroupsTemplateDatatables from './GetGroupsTemplateDatatables';
import GetGroupsTemplateOfficeOptions from './GetGroupsTemplateOfficeOptions';
import GetGroupsTemplateStaffOptions from './GetGroupsTemplateStaffOptions';

/**
 * The GetGroupsTemplateResponse model module.
 * @module model/GetGroupsTemplateResponse
 * @version 1.0
 */
class GetGroupsTemplateResponse {
    /**
     * Constructs a new <code>GetGroupsTemplateResponse</code>.
     * GetGroupsTemplateResponse
     * @alias module:model/GetGroupsTemplateResponse
     */
    constructor() { 
        
        GetGroupsTemplateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetGroupsTemplateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetGroupsTemplateResponse} obj Optional instance to populate.
     * @return {module:model/GetGroupsTemplateResponse} The populated <code>GetGroupsTemplateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetGroupsTemplateResponse();

            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('officeOptions')) {
                obj['officeOptions'] = ApiClient.convertToType(data['officeOptions'], [GetGroupsTemplateOfficeOptions]);
            }
            if (data.hasOwnProperty('staffOptions')) {
                obj['staffOptions'] = ApiClient.convertToType(data['staffOptions'], [GetGroupsTemplateStaffOptions]);
            }
            if (data.hasOwnProperty('clientOptions')) {
                obj['clientOptions'] = ApiClient.convertToType(data['clientOptions'], [GetGroupsTemplateClientOptions]);
            }
            if (data.hasOwnProperty('datatables')) {
                obj['datatables'] = ApiClient.convertToType(data['datatables'], [GetGroupsTemplateDatatables]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} officeId
 */
GetGroupsTemplateResponse.prototype['officeId'] = undefined;

/**
 * @member {Array.<module:model/GetGroupsTemplateOfficeOptions>} officeOptions
 */
GetGroupsTemplateResponse.prototype['officeOptions'] = undefined;

/**
 * @member {Array.<module:model/GetGroupsTemplateStaffOptions>} staffOptions
 */
GetGroupsTemplateResponse.prototype['staffOptions'] = undefined;

/**
 * @member {Array.<module:model/GetGroupsTemplateClientOptions>} clientOptions
 */
GetGroupsTemplateResponse.prototype['clientOptions'] = undefined;

/**
 * @member {Array.<module:model/GetGroupsTemplateDatatables>} datatables
 */
GetGroupsTemplateResponse.prototype['datatables'] = undefined;






export default GetGroupsTemplateResponse;

