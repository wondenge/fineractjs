

import ApiClient from '../ApiClient';
import PutTaxesGroupChanges from './PutTaxesGroupChanges';

/**
 * The PutTaxesGroupTaxGroupIdResponse model module.
 * @module model/PutTaxesGroupTaxGroupIdResponse
 * @version 1.0
 */
class PutTaxesGroupTaxGroupIdResponse {
    /**
     * Constructs a new <code>PutTaxesGroupTaxGroupIdResponse</code>.
     * PutTaxesGroupTaxGroupIdResponse
     * @alias module:model/PutTaxesGroupTaxGroupIdResponse
     */
    constructor() { 
        
        PutTaxesGroupTaxGroupIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutTaxesGroupTaxGroupIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutTaxesGroupTaxGroupIdResponse} obj Optional instance to populate.
     * @return {module:model/PutTaxesGroupTaxGroupIdResponse} The populated <code>PutTaxesGroupTaxGroupIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutTaxesGroupTaxGroupIdResponse();

            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
            if (data.hasOwnProperty('changes')) {
                obj['changes'] = PutTaxesGroupChanges.constructFromObject(data['changes']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} resourceId
 */
PutTaxesGroupTaxGroupIdResponse.prototype['resourceId'] = undefined;

/**
 * @member {module:model/PutTaxesGroupChanges} changes
 */
PutTaxesGroupTaxGroupIdResponse.prototype['changes'] = undefined;






export default PutTaxesGroupTaxGroupIdResponse;

