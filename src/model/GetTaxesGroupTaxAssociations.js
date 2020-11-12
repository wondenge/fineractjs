

import ApiClient from '../ApiClient';
import GetTaxesGroupTaxComponent from './GetTaxesGroupTaxComponent';

/**
 * The GetTaxesGroupTaxAssociations model module.
 * @module model/GetTaxesGroupTaxAssociations
 * @version 1.0
 */
class GetTaxesGroupTaxAssociations {
    /**
     * Constructs a new <code>GetTaxesGroupTaxAssociations</code>.
     * @alias module:model/GetTaxesGroupTaxAssociations
     */
    constructor() { 
        
        GetTaxesGroupTaxAssociations.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetTaxesGroupTaxAssociations</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTaxesGroupTaxAssociations} obj Optional instance to populate.
     * @return {module:model/GetTaxesGroupTaxAssociations} The populated <code>GetTaxesGroupTaxAssociations</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetTaxesGroupTaxAssociations();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('taxComponent')) {
                obj['taxComponent'] = GetTaxesGroupTaxComponent.constructFromObject(data['taxComponent']);
            }
            if (data.hasOwnProperty('startDate')) {
                obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetTaxesGroupTaxAssociations.prototype['id'] = undefined;

/**
 * @member {module:model/GetTaxesGroupTaxComponent} taxComponent
 */
GetTaxesGroupTaxAssociations.prototype['taxComponent'] = undefined;

/**
 * @member {Date} startDate
 */
GetTaxesGroupTaxAssociations.prototype['startDate'] = undefined;






export default GetTaxesGroupTaxAssociations;

