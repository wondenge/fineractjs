

import ApiClient from '../ApiClient';

/**
 * The PutProvisioningCriteriaResponseChanges model module.
 * @module model/PutProvisioningCriteriaResponseChanges
 * @version 1.0
 */
class PutProvisioningCriteriaResponseChanges {
    /**
     * Constructs a new <code>PutProvisioningCriteriaResponseChanges</code>.
     * @alias module:model/PutProvisioningCriteriaResponseChanges
     */
    constructor() { 
        
        PutProvisioningCriteriaResponseChanges.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutProvisioningCriteriaResponseChanges</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutProvisioningCriteriaResponseChanges} obj Optional instance to populate.
     * @return {module:model/PutProvisioningCriteriaResponseChanges} The populated <code>PutProvisioningCriteriaResponseChanges</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutProvisioningCriteriaResponseChanges();

            if (data.hasOwnProperty('criteriaName')) {
                obj['criteriaName'] = ApiClient.convertToType(data['criteriaName'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} criteriaName
 */
PutProvisioningCriteriaResponseChanges.prototype['criteriaName'] = undefined;






export default PutProvisioningCriteriaResponseChanges;

