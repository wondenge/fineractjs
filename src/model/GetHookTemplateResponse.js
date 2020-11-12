

import ApiClient from '../ApiClient';
import Grouping from './Grouping';
import HookTemplateData from './HookTemplateData';

/**
 * The GetHookTemplateResponse model module.
 * @module model/GetHookTemplateResponse
 * @version 1.0
 */
class GetHookTemplateResponse {
    /**
     * Constructs a new <code>GetHookTemplateResponse</code>.
     * GetHookTemplateResponse
     * @alias module:model/GetHookTemplateResponse
     */
    constructor() { 
        
        GetHookTemplateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetHookTemplateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetHookTemplateResponse} obj Optional instance to populate.
     * @return {module:model/GetHookTemplateResponse} The populated <code>GetHookTemplateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetHookTemplateResponse();

            if (data.hasOwnProperty('templates')) {
                obj['templates'] = ApiClient.convertToType(data['templates'], [HookTemplateData]);
            }
            if (data.hasOwnProperty('groupings')) {
                obj['groupings'] = ApiClient.convertToType(data['groupings'], [Grouping]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/HookTemplateData>} templates
 */
GetHookTemplateResponse.prototype['templates'] = undefined;

/**
 * @member {Array.<module:model/Grouping>} groupings
 */
GetHookTemplateResponse.prototype['groupings'] = undefined;






export default GetHookTemplateResponse;

