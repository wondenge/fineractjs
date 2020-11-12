

import ApiClient from '../ApiClient';

/**
 * The PutTaxesGroupModifiedComponents model module.
 * @module model/PutTaxesGroupModifiedComponents
 * @version 1.0
 */
class PutTaxesGroupModifiedComponents {
    /**
     * Constructs a new <code>PutTaxesGroupModifiedComponents</code>.
     * @alias module:model/PutTaxesGroupModifiedComponents
     */
    constructor() { 
        
        PutTaxesGroupModifiedComponents.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutTaxesGroupModifiedComponents</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutTaxesGroupModifiedComponents} obj Optional instance to populate.
     * @return {module:model/PutTaxesGroupModifiedComponents} The populated <code>PutTaxesGroupModifiedComponents</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutTaxesGroupModifiedComponents();

            if (data.hasOwnProperty('endDate')) {
                obj['endDate'] = ApiClient.convertToType(data['endDate'], 'String');
            }
            if (data.hasOwnProperty('taxComponentId')) {
                obj['taxComponentId'] = ApiClient.convertToType(data['taxComponentId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} endDate
 */
PutTaxesGroupModifiedComponents.prototype['endDate'] = undefined;

/**
 * @member {Number} taxComponentId
 */
PutTaxesGroupModifiedComponents.prototype['taxComponentId'] = undefined;






export default PutTaxesGroupModifiedComponents;

