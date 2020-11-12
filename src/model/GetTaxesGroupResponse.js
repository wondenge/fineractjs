

import ApiClient from '../ApiClient';
import GetTaxesGroupTaxAssociations from './GetTaxesGroupTaxAssociations';

/**
 * The GetTaxesGroupResponse model module.
 * @module model/GetTaxesGroupResponse
 * @version 1.0
 */
class GetTaxesGroupResponse {
    /**
     * Constructs a new <code>GetTaxesGroupResponse</code>.
     * GetTaxesGroupResponse
     * @alias module:model/GetTaxesGroupResponse
     */
    constructor() { 
        
        GetTaxesGroupResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetTaxesGroupResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTaxesGroupResponse} obj Optional instance to populate.
     * @return {module:model/GetTaxesGroupResponse} The populated <code>GetTaxesGroupResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetTaxesGroupResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('taxAssociations')) {
                obj['taxAssociations'] = ApiClient.convertToType(data['taxAssociations'], [GetTaxesGroupTaxAssociations]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetTaxesGroupResponse.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetTaxesGroupResponse.prototype['name'] = undefined;

/**
 * @member {Array.<module:model/GetTaxesGroupTaxAssociations>} taxAssociations
 */
GetTaxesGroupResponse.prototype['taxAssociations'] = undefined;






export default GetTaxesGroupResponse;

